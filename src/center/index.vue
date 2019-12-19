<template lang="html">
  <div class="center">
    <ctop/>
    <ccontent/>
  </div>
</template>

<script type="text/ecmascript-6">
import ctop from './c_top.vue'
import ccontent from './c_content.vue'
  export default {
    components:{
      ctop,
      ccontent,
    }
  }
</script>

<style lang="scss">
    .center{
        box-sizing: border-box;
        height: 85vh;
        width: 25%;
        margin-right: 15px;
        border:1px solid #01709B;
        // border-radius: 50px;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
        padding-bottom: 20px;
    }
</style>
