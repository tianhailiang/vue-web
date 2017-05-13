import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/login/Login' //登陆模块
import Register from '../components/page/register/Register' //注册模块
import Index from '../components/page/Index'

import UserManagement from '../components/page/system_management/User_management'
import MTt from '../components/page/myTimetable/MyTimetable' 

import SmallSchool from '../components/page/smallSchool/SmallSchool' // 微校模块
import SchoolDetail from '../components/page/smallSchool/SchoolDetail' //学校详情页模块

Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
    {
      path: '/myTimetable',
      name: 'MTt',
      component: MTt
    },

    {
      path: '/smallSchool',
      name: 'smallSchool',
      component: SmallSchool
      
    },
    { path: '/schoolDetail/:id',
      name:'schoolDetail',
      component: SchoolDetail 
    }


  ]
})
