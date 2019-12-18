<template>
  <div class="header">
      <p class="Htitle">事件敏捷看板</p>
      <p class="Hcontent">通过青、黄、红、黑单查看单派进度，反映敏捷情况</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header {
        width:100%;
        height: 60px;
        color:#fff;
        box-sizing: border-box;
        text-align: center;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        border:1px solid #01709B;
        border-radius: 50px;
        .Htitle {
            font-size: 16px;
            font-weight: bolder;
        }
        .Hcontent{
            font-size: 10px;
            color:rgb(145, 149, 150);
        }
    }
</style>