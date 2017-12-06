/**
* Created by aresn on 16/6/20.
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import FintechVueComponent from '../index';
import "../src/styles/layout.less";
Vue.use(VueRouter);
Vue.use(FintechVueComponent);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/data-grid',
      component: require('./components/DataGrid.vue')
    }
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});