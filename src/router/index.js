import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index';
import IndexMain from '../components/IndexMain';
import AboutMe from '../components/AboutMe';
import FruitsBox from '../components/FruitsBox';
import ShopList from '../components/ShopList';
import Know from '../components/Know.vue';
import Community from '../components/Community';
import Myself from '../components/Myself';
import ProductDetails from '../components/ProductDetails';
import Information from '../components/Information';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/index/indexMain'
      redirect:'/index/information'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path:'indexMain',
          name:'indexMain',
          component:IndexMain
        },
        {
          path:'aboutMe',
          name:'aboutMe',
          component:AboutMe
        },
        {
          path:'fruitsBox',
          name:'fruitsBox',
          component:FruitsBox
        },
        {
          path:'shoplist',
          name:'shoplist',
          component:ShopList
        },
        {
          path:'know',
          name:'know',
          component:Know
        },
        {
          path:'community',
          name:'community',
          component:Community
        },
        {
          path:'myself',
          name:'myself',
          component:Myself
        },
        {
          path:'productDetails',
          name:'productDetails',
          component:ProductDetails
        },
        {
          path:'information',
          name:'information',
          component:Information
        }
      ]
    }
  ]
})
