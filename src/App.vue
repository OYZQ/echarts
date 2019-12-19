<template>
    <div id="app">
      <div class="bg"></div>
      <div>
        <div class="headerclound">
          <header2/>
        </div>
        <div class="app_content">
          <left/>
          <right/>
          <center/>
        </div>
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
        height: 100vh;
        box-sizing: border-box;
        .headerclound{
          padding: 20px;
        }
        .app_content{
          display: flex;
          align-items: center;
          box-sizing: border-box;
          justify-content:space-between;
        }
    }
    .bg{
      width:100vw;
      height: 100vh;
      background-repeat:no-repeat;
      background-size:cover;
      -webkit-filter:blur(15px);
      -moz-filter:blur(15px);
      -o-filter:blur(15px);
      -ms-filter:blur(15px);
      filter:blur(15px);
      position:absolute;
      left:0;
      top:0;
      background-image: url('./static/img/图片6.jpg');
      filter: blur(5px);
      z-index: -1;
    }

</style>