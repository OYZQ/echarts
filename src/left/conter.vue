<template lang="html">
  <div class="h_conter">
    <p class="h_today">事件积压</p>
    <p class="h_event">The backing of incidents<p/>
    <div id="myChart" :style="{width: '460px', height: '200px'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  crossStyle: {
                    color: 'red'
                  }
                }
              },
          grid: [ //指定坐标轴位置，大小
            {
                x: '7%',
                y: '30%',
                width: '50%',
                height: '55%'
            },{
                height: '40%'
            }//关系图位置
        ],
              xAxis: {
                splitLine:{
                  show:false
                },
                data: ["已超期","流逝75%","流逝50%","还好"],
                axisLabel:{
                  textStyle: {
                      color: '#ffffff'
                  },
                  interval:'0'
                },
                boundaryGap:false,
              },
              yAxis: {
                splitLine:{
                  show:false
                },
                show:false,
                max:100
              },
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 4, 0,46],
                  barWidth: '40%',
                  itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function(params) { 
                          var colorList = ['#333333','#ED3333','#FE9E00','#619505']; 
                          return colorList[params.dataIndex] 
                      },
                      label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#5D524D',
                            fontSize: 12
                        }
                      }
                    },
                  },
                  markPoint : {
                    data : [
                        { 
                      value : '黑单',xAxis: 0,yAxis: 20,
                      itemStyle: {
                        color:'#333333'
                      }
                    },
                        { 
                      value : '红单', xAxis: 1, yAxis: 19,
                      itemStyle: {
                        color:'#ED3333'
                      }
                    },
                        { 
                      value : '黄单', xAxis: 2, yAxis: 15,
                      itemStyle: {
                        color:'#FE9E00'
                      }
                    },
                        { 
                            value : '青单', xAxis: 3, yAxis: 61,
                            itemStyle: {
                              color:'#619505'
                            }
                          },
                    ],
                    symbol:'pin',
                  },
              },{
            name:'访问来源',
            type:'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            center: ['75%', '60%'],//饼图位置控制
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:5, name:'已超期',itemStyle: {color:'#333333'}},
                {value:4, name:'流逝75%',itemStyle: {color:'#ED3333'}},
                {value:0, name:'流逝50%',itemStyle: {color:'#FE9E00'}},
                {value:46, name:'还好',itemStyle: {color:'#619505'}},
            ]
        }
              ]
          });
      }
    }
  }
</script>

<style lang="scss">
    .h_conter{
        width: 100%;
        box-sizing: border-box;
        width: 100%;
        color: #ffffff;
        padding:10px 10px;
        padding-bottom: 40px;
        text-align: center;
        .h_today{
          color: #ffffff;
          font-size: 15px;
        }
        .h_event{
          color:rgb(173, 162, 150);
        }
    }
</style>
