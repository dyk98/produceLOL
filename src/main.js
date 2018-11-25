// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import'jquery'
import '../node_modules/swiper/dist/css/swiper.css'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
// let router = new VueRouter({
// //   mode:'history',
// //   routes: router
// // })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

