import Vue from 'vue'
import Router from 'vue-router'
// 全局组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
//局部组件
import HomeHot from '@/components/HomeHot'
import HomeMsg from '@/components/HomeMsg'
import Guide from '@/components/Guide'
import Entertainment from '@/components/Entertainment'
import Product from '@/components/Product'
import Discuss from '@/components/Discuss'
import DiscussDetail from '@/components/DiscussDetail'


Vue.component('Header',Header);
Vue.component('Footer',Footer);
Vue.component('Slider',Slider);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeHot',
      component: HomeHot
    },
    {
      path: '/HomeMsg',
      name: 'HomeMsg',
      component: HomeMsg
    },
    {
      path: '/Guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/Entertainment',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Discuss',
      name: 'Discuss',
      component: Discuss
    },
    {
      path: '/DiscussDetail',
      name: 'DiscussDetail',
      component: DiscussDetail
    }
  ]
})
