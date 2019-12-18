<template lang="html">
  <div class="r_top">
    <p class="t_title">事态、事件和变更情况</p>
    <p class="t_des">State of affairs, events and changes</p>
    <div id="Rtchart" :style="{width: '620px', height: '190px'}"></div>
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
        let myChart = this.$echarts.init(document.getElementById('Rtchart'))
        // 绘制图表
        myChart.setOption({
            tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                  }
              }
            },
            legend: {
              data:['邮件营销','联盟广告','视频广告']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
              left: '5%',
              right: '4%',
              bottom: '10%',
              containLabel: true
            },
            xAxis : [
                {
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                        width: 1, //这里是为了突出显示加上的  
                    }
                  },
                  type : 'category',
                  boundaryGap : false,
                  data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'],
                  axisLabel:{
                    textStyle: {
                        color: '#ffffff'
                    },
                    interval:'0'
                  },
                  splitLine:{
                    show:false
                  },
                  axisTick:{       //y轴刻度线
                    "show":false
                  },
                }
            ],
            yAxis : [
                {
                  axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                        width: 1, //这里是为了突出显示加上的  
                    }
                  },
                  type : 'value',
                  splitLine:{
                    show:false
                  },
                  axisTick:{       //y轴刻度线
                    "show":false
                  },
                  axisLine:{       //y轴
                    "show":false

                  },
                  axisLabel:{
                    textStyle: {
                        color: '#ffffff'
                    },
                    interval:'0',
                  formatter: function(){
                  return "";
                  }
                  },
                }
            ],
            series : [
              {
                  name:'事态',
                  type:'line',
                  stack: '总量1',
                  smooth:true,
                  areaStyle: {},
                  data:[300,190,250,380,160,240,120, 300,280,120,132,200,150, 301, 234, 390, 230, 210]
              },
              {
                  name:'事件',
                  type:'line',
                  stack: '总量2',
                  smooth:true,
                  areaStyle: {},
                  data:[220, 382, 191, 234, 290, 330, 310,150, 232, 201, 154, 190, 330, 410,200,150, 101, 134]
              },
              {
                  name:'变更情况',
                  type:'line',
                  stack: '总量3',
                  smooth:true,
                  areaStyle: {},
                  data:[234, 290, 430, 310,150,140,120, 100, 190, 330, 410,200,150, 101, 134, 90, 230, 210],
              }
            ]
        });
    }
  }
  }
</script>

<style lang="scss">
    .r_top{
        width: 100%;
        border-bottom: #ffffff solid 1px;
        border:1px solid #01709B;
        border-radius: 50px;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        margin: 15px 0;
        text-align: center;
        .t_title{
          padding: 10px;
          padding-bottom: 0px;
          font-size: 18px;
          color: #E5E3DA;
          font-weight: 1000;
        }
        .t_des{
          font-size: 12px;
          color: #767270;
          padding: 10px;
          padding-top: 0px;
        }
    }
</style>
