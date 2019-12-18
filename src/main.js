import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('./mock'); //引入mock数据，关闭则注释该行
Vue.config.productionTip = false;
// import axios from 'axios'
// Vue.prototype.$axios = axios  
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})