<template>
    <div id="app">
        <div class="headerclound">
          <header2/>
        </div>
        <div class="app_content">
          <left/>
          <right/>
          <center/>
        </div>
    </div>
</template>

<script>
  import echarts from './echarts/Echarts.vue'
  import header2 from './header/index.vue'
  import left from './left/index.vue'
  import center from './center/index.vue'
  import right from './right/index.vue'
  export default {
    name: 'app',
    data () {
      return {
        infos:[]
      }
    },
    components: {
        echarts,
        header2,
        left,
        center,
        right,
      }
  }
</script>

<style lang="scss" scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        h1 {color: black;}
        background: #000C22;
        height: 100vh;
        box-sizing: border-box;
        .headerclound{
          background: #000C22;
          padding: 20px;
        }
        .app_content{
          display: flex;
          align-items: center;
          box-sizing: border-box;
          justify-content:space-between;
          background: #000C22;
        }
    }

</style>