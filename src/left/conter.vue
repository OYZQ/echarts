<template lang="html">
  <div class="h_conter">
    <p class="h_today">事件积压</p>
    <!-- <p class="h_event">The backing of incidents<p/> -->
    <div id="myChart" :style="{width: '740px', height: '150px'}"></div>
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
                  y: '25%',
                  width: '50%',
                  height: '55%'
              }
            ],
            xAxis: {
              splitLine:{
                show:false
              },
              data: ["已超期","流逝75%","流逝50%","还好"],
              axisLabel:{
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16
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
            series: [
                {
                  name: '销量',
                  type: 'bar',
                  data: [5, 4, 0,46],
                  barWidth: '40%',
                  itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function(params) { 
                          var colorList = ['#F5675D','#EDDC49','#72CB6F','#5FBDB7']; 
                          return colorList[params.dataIndex] 
                      },
                      label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#bbbbbb',
                            fontSize: 14
                        }
                      }
                    },
                  },
                  markPoint : {
              data : [
               { 
                  value : '红单',xAxis: 0,yAxis: 5+24,
                  itemStyle: {
                    color:'#F5675D'
                  }
                },
                { 
                  value : '黄单', xAxis: 1, yAxis: 4+24,
                  itemStyle: {
                    color:'#EDDC49'
                  }
                },
                { 
                  value : '青单', xAxis: 2, yAxis: 0+24,
                  itemStyle: {
                    color:'#72CB6F'
                  }
                },
                { 
                  value : '蓝单', xAxis: 3, yAxis: 46+24,
                  itemStyle: {
                    color:'#5FBDB7'
                  }
                },
                ],
                symbol:'pin',
              },
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
          font-size: 18px;
        }
        .h_event{
          color:rgb(173, 162, 150);
        }
    }
</style>
