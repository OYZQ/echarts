<template lang="html">
  <div class="right">
    <bottom/>
    <top/>
    <conter/>
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
    .right{
        color: #ffffff;
        font-size: 12px;
        box-sizing: border-box;
        height: 85vh;
        overflow: hidden;
        width: 50%;
        margin: 0 20px;
    }
</style>
