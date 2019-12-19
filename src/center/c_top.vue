<template lang="html">
  <div class="c_top">
    <p class="t_today">事件剩余时间排序（55）</p>
    <!-- <p class="t_event">Event time remaining sorting<p/> -->
    <p class="t_title"><span class="enent">事件号</span><span class="duty">责任人</span><span class="summary">摘要</span></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="scss">
    .c_top{
        width: 100%;
        color: #ffffff;
        padding:10px 10px;
        padding-bottom: 0;
        box-sizing: border-box;
        text-align: center;
        .t_today{
          color: #fff;
          font-size: 18px;
        }
        .t_event{
          color:rgb(177, 167, 158);
        }
        .t_title{
            text-align: center;
            display: flex;
            margin-top: 10px;
            font-size: 14px;
            .enent{
                flex: 1;
            }
            .duty{
                flex: 2;
            }
            .summary{
                flex: 6;
            }
            border-bottom:#574D45 solid 2px;
        }
    }
</style>
