<template lang="html">
  <div class="r_bottom">
    <p class="b_today">今日SLA达标率</p>
    <p class="b_event">SLA compliance rate today<p/>
    <div class="bcontent">
      <div id="gaugeChart" :style="{width: '650px', height: '280px'}"></div>
      <!-- <div class="ldiv">
        <div class="dleft">
          <p class="levent">今日产生且完成事件</p>
          <p class="evente">Solved incident number</p>
        </div>
        <div class="num">3</div>
      </div>
      <div class="rdiv">
        <div class="dleft">
          <div class="sla">今日产生且SLA达标率</div>
          <div class="slae">Rate of SLA today</div>
        </div>
        <div class="num">3</div>
      </div> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        a:240/300*100+'%'
      }
    },
    mounted(){
    this.drawLine(this.a);
  },
  methods: {
    echartsBlable(){
      num = 240/300*100
      return num
    },
    drawLine(a){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('gaugeChart'))
        // 绘制图表
        myChart.setOption({
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50}],
                    center: ['55%', '55%'],
                    radius: '75%',
                }
            ]
        });
      }
    }
  }
</script>

<style lang="scss">
    .r_bottom{
        width: 100%;
        padding:10px;
        box-sizing: border-box;
        height: 250px;
        border:1px solid #01709B;
        border-radius: 50px;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        .b_today{
          color: #ffffff;
          font-size: 15px;
          text-align: center;
        }
        .b_event{
          color:rgb(182, 171, 159);
          text-align: center;
        }
        .bcontent{
          position: absolute;
          width: 33.33%;
          height: 80px;
          #gaugeChart{
            position: relative;
            top:-50px;
          }
          .ldiv{
            background: #D05126;
            width: 140px;
            height: 60px;
            border-radius: 10px;
            display: flex;
            box-sizing: border-box;
            position: absolute;
            left: 140px;
            top: 150px;
            .dleft{
              flex: 5;
              line-height: 16px;
              font-size: 12px;
              padding-left: 5px;
              padding-top: 5px;
            }
            .num{
              flex: 1;
              font-size: 20px;
              font-weight: bold;
              line-height: 60px;
            }
          }
          .rdiv{
            position: absolute;
            background: #1C789F;
            width: 140px;
            height: 60px;
            border-radius: 10px;
            display: flex;
            box-sizing: border-box;
            right: 0px;
            top: 150px;
            .dleft{
              flex: 5;
              line-height: 16px;
              font-size: 12px;
              padding-left: 5px;
              padding-top: 5px;
            }
            .num{
              flex: 1;
              font-size: 20px;
              font-weight: bold;
              line-height: 60px;
            }
          }
        }
    }
</style>