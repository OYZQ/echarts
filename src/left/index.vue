<template lang="html">
  <div class="left">
    <top/>
    <conter/>
    <bottom/>
  </div>
</template>

<script type="text/ecmascript-6">
import top from './top.vue'
import conter from './conter.vue'
import bottom from './bottom.vue'
  export default {
    components:{
      top,
      conter,
      bottom,
    }
  }
</script>

<style lang="scss">
    .left{
        height: 85vh;
        box-sizing: border-box;
        overflow: hidden;
        width: 25%;
        border:1px solid #01709B;
        border-radius: 50px;
        box-shadow: 0px 0px 20px rgb(37, 164, 214) inset; 
    }
</style>
