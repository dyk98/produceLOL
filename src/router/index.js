import Vue from 'vue'
import Router from 'vue-router'
// 全局组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'


//局部组件
import HomeHot from '@/components/Home/HomeHot'
import HomeMsg from '@/components/Home/HomeMsg'
import Guide from '@/components/Home/Guide'
import Entertainment from '@/components/Home/Entertainment'
import Product from '@/components/Home/Product'
import Discuss from '@/components/Discuss/Discuss'
import DiscussDetail from '@/components/Discuss/DiscussDetail'
import DiscussAll from '@/components/Discuss/DiscussAll'
import DiscussWell from '@/components/Discuss/DiscussWell'
import DetailArticle from '@/components/Discuss/DetailArticle'
import ArticleAdd from '@/components/Discuss/ArticleAdd'
import Competition from '@/components/Competition/Competition'
import CompetitionMsg from '@/components/Competition/CompetitionMsg'
import CompetitionData from '@/components/Competition/CompetitionData'
import CompetitionMes from '@/components/Competition/CompetitionMes'
import CompetitionMember from '@/components/Competition/CompetitionMember'
import CompetitionTime from '@/components/Competition/CompetitionTime'
import ChangeTeam from '@/components/Competition/ChangeTeam'

import VideoHome from '@/components/MatchVideo/VideoHome'
import VideoDetail from '@/components/MatchVideo/VideoDetail'
import MemberData from '@/components/Competition/MemberData'
import MemberNews from '@/components/Competition/MemberNews'
import PersonalData from '@/components/Competition/PersonalData'
import CompetitionHis from '@/components/Competition/CompetitionHis'
import ChangeGame from '@/components/Home/ChangeGame'
import Test from '@/components/Test'
import Data from '@/components/Data/Data'
import LplData from '@/components/Data/LplData'
import LckData from '@/components/Data/LckData'
import Person from '@/components/Person'








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
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/ChangeGame',
      name: 'ChangeGame',
      component: ChangeGame
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
      path: '/ArticleAdd',
      name: 'ArticleAdd',
      component: ArticleAdd
    },
    {
      path: '/DiscussDetail',
      name: 'DiscussDetail',
      component: DiscussDetail,
      redirect:'/DiscussDetail/DiscussAll',
      children:[
        {
          path: '/DiscussDetail/DiscussAll',
          name: 'DiscussAll',
          component: DiscussAll,
        },
        {
          path: '/DiscussDetail/DiscussWell',
          name: 'DiscussWell',
          component: DiscussWell,
        }
      ]
    },
    {
      path: '/DetailArticle',
      name: 'DetailArticle',
      component: DetailArticle,
    },
    {
      path: '/Competition',
      name: 'Competition',
      component: Competition,
      redirect:'/Competition/CompetitionMsg',
      children: [
        {
          path: '/Competition/CompetitionMsg',
          name: 'CompetitionMsg',
          component: CompetitionMsg,
        },
        {
          path: '/Competition/CompetitionData',
          name: 'CompetitionData',
          component: CompetitionData,
        },
        {
          path: '/Competition/CompetitionMes',
          name: 'CompetitionMes',
          component: CompetitionMes,
        },
        {
          path: '/Competition/CompetitionMember',
          name: 'CompetitionMember',
          component: CompetitionMember,
        },
        {
          path: '/Competition/CompetitionTime',
          name: 'CompetitionTime',
          component: CompetitionTime,
        },
      ]
    },
    {
      path: '/ChangeTeam',
      name: 'ChangeTeam',
      component: ChangeTeam,
    },
    {
      path: '/VideoHome',
      name: 'VideoHome',
      component: VideoHome,
    },
    {
      path: '/VideoDetail',
      name: 'VideoDetail',
      component: VideoDetail,
    },
    {
      path: '/MemberData',
      name: 'MemberData',
      component: MemberData,
      redirect:'/MemberData/MemberNews',
      children:[
        {
          path: '/MemberData/MemberNews',
          name: 'MemberNews',
          component: MemberNews,
        },
        {
          path: '/MemberData/PersonalData',
          name: 'PersonalData',
          component: PersonalData,
        },
        {
          path: '/MemberData/CompetitionHis',
          name: 'CompetitionHis',
          component: CompetitionHis,
        },
      ]
    },
    {
      path: '/Data',
      name: 'Data',
      component: Data,
      redirect:'/Data/LplData',
      children:[
        {
          path: '/Data/LplData',
          name: 'LplData',
          component: LplData,
        },
        {
          path: '/Data/LckData',
          name: 'LckData',
          component: LckData,
        },
      ]
    },
  ]
})
