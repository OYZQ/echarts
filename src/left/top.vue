<template lang="html">
  <div class="l_top">
    <p class="l_today">今日事件情况</p>
    <div class="l_request">请求：0</div>
    <div class="l_content">
      <img src='../static/img/jt.png'>
      <div class="l_handle">
        <p class="l_font_1">1</p>
        <p class="l_font_2">处理中</p>
      </div>
      <img src='../static/img/jt.png'>
      <div class="l_finish">
        <p class="l_font_1">13</p>
        <p class="l_font_2">已完成</p>
      </div>
    </div>
    <div class="l_even">事件：14</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>
<style lang="scss">
    .l_top{
        box-sizing: border-box;
        width: 100%;
        color: #ffffff;
        padding:10px 20px;
        padding-bottom: 40px;
        .l_today{
          color: #ffffff;
          font-size: 18px;
          text-align: center;
          margin-bottom: 20px;
        }
        .l_event{
          color:#01C4BE;
        }
        .l_request{
          text-align: center;
          line-height: 60px;
          width:100px;
          height: 60px;
          background: #F5675D;
          border-radius: 13px;
          font-weight: bold;
          font-size: 15px;
          margin-left: 10px;
        }
        .l_even{
          margin-top: 40px;
          text-align: center;
          line-height: 60px;
          width:100px;
          height: 60px;
          background: #6984E3;
          border-radius: 13px;
          font-weight: bold;
          font-size: 15px;
          margin-left: 10px;
        }
        .l_content{
          float: right;
          margin-right: 10px;
          margin-top: -20px;
          img {
            margin-top: 30px;
            width: 30px;
          }
          .l_handle{
            text-align: center;
            display: inline-block;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: #5FBDB7;
            line-height: 24px;
            margin: 0 10px;
            .l_font_1{
              margin-top: 15px;
              font-weight: 750;
              font-size: 25px;
            }
            .l_font_2{
              font-weight: 1000;
              font-size: 14px;
            }
          }
          .l_finish{
            text-align: center;
            display: inline-block;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: #72CB6F;
            line-height: 24px;
            margin: 0 10px;
            .l_font_1{
              margin-top: 15px;
              font-weight: 750;
              font-size: 25px;
            }
            .l_font_2{
              font-weight: 1000;
              font-size: 14px;
            }
          }
        }
    }
</style>
