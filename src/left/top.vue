<template lang="html">
  <div class="l_top">
    <p class="l_today">今日事件情况</p>
    <p class="l_event">Event overview in today<p/>
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
        padding:10px 10px;
        padding-bottom: 40px;
        .l_today{
          color: #C2820F;
          font-size: 15px;
        }
        .l_event{
          color:#4A4540;
        }
        .l_request{
          text-align: center;
          line-height: 45px;
          width:80px;
          height: 45px;
          background: #AF2A1B;
          border-radius: 10px;
          font-weight: bold;
          font-size: 15px;
        }
        .l_even{
          margin-top: 40px;
          text-align: center;
          line-height: 45px;
          width:80px;
          height: 45px;
          background: #D05126;
          border-radius: 10px;
          font-weight: bold;
          font-size: 15px;
        }
        .l_content{
          float: right;
          margin-right: 90px;
          margin-top: -20px;
          img {
            margin-top: 30px;
            width: 30px;
          }
          .l_handle{
            text-align: center;
            display: inline-block;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #F79A00;
            line-height: 24px;
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
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #619505;
            line-height: 24px;
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
