<template lang="html">
  <div class="r_conter">
    <p class="r_today">各状态事件数量</p>
    <p class="r_event">Number of events in each status<p/>
    <div id="rcChart" :style="{width: '650px', height: '220px'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
    this.drawLine();
    },
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myCharts = this.$echarts.init(document.getElementById('rcChart'))
          // 绘制图表
          myCharts.setOption({
              tooltip: {},
              grid:[
                {
                x: '5%',
                y: '10%',

                }
              ],
              xAxis: {
                  data: ["综合故障受理","已发现超大范围故障","已测发给现场","已测发给厂商","已提交到现场处理","HIS故障处理","开始","故障已提交","已升级到厂商处理","故障设备送修中","现场诊断处理中","远程处理中","已提交HIS故障","结束"],
                  axisTick:{       //x轴刻度线
                    "show":false
                  },
                  axisLabel:{
                  textStyle: {
                      fontSize:'14px',
                      color: '#564E4A',
                  },
                  interval:'0',
                  //坐标轴刻度标签的相关设置。
                  formatter : function(params){
                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 2;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                            }

                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回
                        return newParamsName
                    },
                },
              },
              yAxis: {
                splitLine:{
                  show:false
                },
                show:false,
                  axisLabel:{
                  textStyle: {
                      color: '#ffffff'
                  },
                  interval:'0'
                },
              },
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [1,1,1,2,2,2,3,3,3,4,4,10,15,12669],
                  barMinHeight: 5,
                  itemStyle: {
                  normal: {
                      // 定制显示（按顺序）
                      color: function(params) { 
                          var colorList = ['#333333','#ED3333','#FE9E00','#619505','#1A7BA4','#7E3994','#8A3A66','#74746F']; 
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
              }]
          });
      }
    }
  }
</script>

<style lang="scss">
    .r_conter{
        box-sizing: border-box;
        width: 100%;
        color: #ffffff;
        padding:10px 10px;
        border:1px solid #01709B;
        border-radius: 50px;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        text-align: center;
        .r_today{
          color: #fff;
          font-size: 15px;
        }
        .r_event{
          color:rgb(167, 157, 140);
        }
    }
</style>
