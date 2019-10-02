var symptomName = last_month_day();

$(function () {


    init();
    init2();
    $("#el-dialog").addClass("hide");
    $(".close").click(function (event) {
        $("#el-dialog").addClass("hide");
    });

    var date = new Date();
    var numble = date.getDate();
    var today = getFormatMonth(new Date());
    $("#date1").html(today);
    $("#date2").html(today);
    $("#date3").html(today);
    $("#date4").html(today);


    lay('.demo-input').each(function () {
        laydate.render({
            type: 'month',
            elem: this,
            trigger: 'click',
            theme: '#95d7fb',
            calendar: true,
            showBottom: true,
            done: function () {
                console.log($("#startDate").val())

            }
        })
    });

})

function init() {
    //案件统计
    var mapChart = echarts.init(document.getElementById('mapChart'));

    setTimeout(function () {

        option = {
            legend: {
                orient: "vertical",
                x: "left",
                textStyle: { //图例文字的样式
                    color: '#ffffff',
                    fontSize: 15
                }
            },
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            color: ['red', '#FFD700', '#FFF8DC', '#FF7F00', '#D3D3D3', '#FFFAF0'],
            dataset: {
                source: [
                ['product', '2019.5.1', '2019.5.2', '2019.5.3', '2019.5.4', '2019.5.5', '2019.5.6', '2019.5.7'],
                ['特重舆情', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7, 14],
                ['轻舆情', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1, 56.4],
                ['中度舆情', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5, 46.5],
                ['重舆情', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1, 56.9],
                ['无', 25, 69, 88, 99, 32, 44, 55]
            ]
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                }
            },
            yAxis: {
                gridIndex: 0,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                }
            },
            grid: {
                top: '55%'
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2019.5.1} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2019.5.1',
                        tooltip: '2019.5.1'
                    }
            }
        ]
        };

        mapChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                mapChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        mapChart.setOption(option);

    });


    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
        tooltip: {
            trigger: 'item'
        },
        calculable: true,
        grid: {
            borderWidth: 0,
            y: 80,
            y2: 60
        },
        xAxis: [
            {
                type: 'category',
                show: true,
                data: ['微信', '微博', '头条', '论坛', '新闻', '报刊', '网页', '百度'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                }
        }
    ],
        yAxis: [
            {
                type: 'value',
                show: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                }
        }
    ],
        series: [
            {
                name: '舆情统计',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                          '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                           '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                           '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },
                data: [12, 21, 10, 4, 12, 5, 6, 5],
                markPoint: {
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(0,0,0,0)',
                        formatter: function (params) {
                            return '<img src="' +
                                params.data.symbol.replace('image://', '') +
                                '"/>';
                        }
                    },
                    data: [
                        {
                            xAxis: 0,
                            y: 350,
                            name: 'Line',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/折线图.png'
                        },
                        {
                            xAxis: 1,
                            y: 350,
                            name: 'Bar',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/柱状图.png'
                        },
                        {
                            xAxis: 2,
                            y: 350,
                            name: 'Scatter',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/散点图.png'
                        },
                        {
                            xAxis: 3,
                            y: 350,
                            name: 'K',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/K线图.png'
                        },
                        {
                            xAxis: 4,
                            y: 350,
                            name: 'Pie',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/饼状图.png'
                        },
                        {
                            xAxis: 5,
                            y: 350,
                            name: 'Radar',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/雷达图.png'
                        },
                        {
                            xAxis: 6,
                            y: 350,
                            name: 'Chord',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/和弦图.png'
                        },
                        {
                            xAxis: 7,
                            y: 350,
                            name: 'Force',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/力导向图.png'
                        },
                        {
                            xAxis: 8,
                            y: 350,
                            name: 'Map',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/地图.png'
                        },
                        {
                            xAxis: 9,
                            y: 350,
                            name: 'Gauge',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/仪表盘.png'
                        },
                        {
                            xAxis: 10,
                            y: 350,
                            name: 'Funnel',
                            symbolSize: 20,
                            symbol: 'image://../asset/ico/漏斗图.png'
                        },
                ]
                }
        }
    ]
    });

    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['red', 'yellow', '#76EE00'],
        legend: {
            orient: 'vertical',
            x: 'left',
            textStyle: {
                color: "rgb(252, 249, 249)"
            },
            data: ['正面', '负面', '中性']
        },
        calculable: true,
        series: [
            {
                name: '情感',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {
                        value: 335,
                        name: '正面'
                    },
                    {
                        value: 310,
                        name: '负面'
                    },
                    {
                        value: 1548,
                        name: '中性'
                    }
            ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{b} : {c} ({d}%)"
                        }
                    }
                }
        }

    ]

    });

    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption({
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 2,
                sizeRange: [12, 50],
                rotationRange: [-90, 90],
                shape: 'pentagon',
                width: 600,
                height: 400,
                drawOutOfBound: true,
                textStyle: {
                    normal: {
                        color: function () {
                            var colors = ['#fda67e', '#81cacc', '#00CD66', "#88cc81", "#82a0c5", '#fddb7e', '#735ba1', '#bda29a', '#FF4500', '#008B8B', '#00688B'];
                            return colors[parseInt(Math.random() * 10)];
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [
                    {
                        name: '奔驰事件',
                        value: 10000,
                        textStyle: {
                            normal: {
                                color: 'red'
                            },
                            emphasis: {
                                color: 'red'
                            }
                        }
                        },
                    {
                        name: '昆山反杀案',
                        value: 6181
                        },
                    {
                        name: '赵宇见义勇为案',
                        value: 4386
                        },
                    {
                        name: '携程亲子园虐童',
                        value: 4055
                        },
                    {
                        name: '江歌案件',
                        value: 2467
                        },
                    {
                        name: '榆林产妇跳楼',
                        value: 2244
                        },
                    {
                        name: '杭州纵火保姆案件',
                        value: 1898
                        },
                    {
                        name: 'iphone禁售',
                        value: 1484
                        },
                    {
                        name: '活埋律师案',
                        value: 1112
                        },
                    {
                        name: '死九伤案',
                        value: 965
                        },
                    {
                        name: '空姐遇害案',
                        value: 847
                        },
                    {
                        name: '充数案件',
                        value: 582
                        },
                    {
                        name: '充数案件',
                        value: 555
                        },
                    {
                        name: '充数案件',
                        value: 550
                        },
                    {
                        name: '充数案件',
                        value: 462
                        },
                    {
                        name: '充数案件',
                        value: 366
                        },
                    {
                        name: '充数案件',
                        value: 360
                        },
                    {
                        name: '充数案件',
                        value: 282
                        },
                    {
                        name: '充数案件',
                        value: 273
                        },
                    {
                        name: '充数案件',
                        value: 265
                        }
                    ]
                }]
        }

    );



}

function init2() {
    var lineChart3 = echarts.init(document.getElementById('lineChart3'));
    lineChart3.setOption({

        color: ["#87cefa", "#ff7f50", ],
        legend: {
            y: 'top',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['门诊人次', '住院人次'],
        },
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}人"
        },
        dataZoom: {
            show: true,
            realtime: true,
            start: 0,
            end: 18,
            height: 20,
            backgroundColor: '#f8f8f8',
            dataBackgroundColor: '#e4e4e4',
            fillerColor: '#87cefa',
            handleColor: '#87cefa',
        },
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "人"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
          }
      ],
        xAxis: [
            {
                type: 'category',
                data: symptomName,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
          }
      ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '门诊费用',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [1150, 180, 2100, 2415, 1212.1, 3125, 1510, 810, 2100, 2415, 1122.1, 3215, 1510, 801, 2001, 2245, 1232.1, 3245, 1520, 830, 2200, 2145, 1223.1, 3225, 150, 80, 200, 245, 122.1, 325]
        },
            {
                name: '住院费用',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, ]
        },
    ]
    });


    var lineChart4 = echarts.init(document.getElementById('lineChart4'));
    lineChart4.setOption({

        color: ["#87cefa", "#ff7f50", ],
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        dataZoom: {
            show: true,
            realtime: true,
            start: 0,
            end: 18,
            height: 20,
            backgroundColor: '#f8f8f8',
            dataBackgroundColor: '#e4e4e4',
            fillerColor: '#87cefa',
            handleColor: '#87cefa',
        },
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "元"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
          }
      ],
        xAxis: [
            {
                type: 'category',
                data: symptomName,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
          }
      ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '医疗费用',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [1500, 800, 1200, 2450, 1122.1, 1325, 1150, 180, 1200, 1245, 1122.1, 1325, 150, 180, 1200, 2145, 1212.1, 3215, 1510, 180, 2100, 2415, 122.1, 325, 150, 80, 200, 245, 122.1, 325].reverse()
        },
    ]
    });

    //年龄分布
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
        color: ["#32cd32", "#ff7f50", "#87cefa", "#FD6C88", "#4b5cc4", "#faff72"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}人"
        },
        calculable: true,
        series: [
            {
                name: '发病人数',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                x: '50%',



                sort: 'ascending',
                data: [
                    {
                        value: 10,
                        name: '婴儿(1-3岁)'
                    },
                    {
                        value: 5,
                        name: '少儿(4-10岁)'
                    },
                    {
                        value: 15,
                        name: '少年(10-18岁)'
                    },
                    {
                        value: 25,
                        name: '青年(18-45岁)'
                    },
                    {
                        value: 125,
                        name: '中年(45-60岁)'
                    },
                    {
                        value: 175,
                        name: '老年(60岁以上)'
                    },
            ]
        }
    ]
    })

    //医疗费用组成
    var pieChart3 = echarts.init(document.getElementById('pieChart3'));
    pieChart3.setOption({
        color: ["#32cd32", "#ff7f50", "#87cefa", "#FD6C88", "#4b5cc4", "#faff72"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        calculable: true,
        series: [
            {
                name: '发病人数',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                x: '50%',



                sort: 'ascending',
                data: [
                    {
                        value: 10,
                        name: '诊察费用'
                    },
                    {
                        value: 500,
                        name: '检查费用'
                    },
                    {
                        value: 150,
                        name: '检验费用'
                    },
                    {
                        value: 250,
                        name: '西药费用'
                    },
                    {
                        value: 125,
                        name: '中药费用'
                    },
                    {
                        value: 1750,
                        name: '手术费用'
                    },
            ]
        }
    ]
    })
}
