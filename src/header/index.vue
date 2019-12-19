<template>
  <div class="header">
      <p class="Htitle">事件敏捷看板</p>
      <p class="Hcontent">通过青、黄、红、蓝单查看单派进度，反映敏捷情况</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header {
        width:60%;
        height: 60px;
        color:#fff;
        box-sizing: border-box;
        text-align: center;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        border:1px solid #01709B;
        margin: 0 auto;
        // border-radius: 50px;
        .Htitle {
            font-size: 18px;
            font-weight: bolder;
        }
        .Hcontent{
            font-size: 12px;
            color:rgb(231, 237, 238);
        }
    }
</style>