import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/login/Login'
import Index from '../components/page/Index'

import Index_login from '../components/page/Index_login'
import UserManagement from '../components/page/system_management/User_management'
import MTt from '../components/page/myTimetable/MyTimetable'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path:'/Index_login',
      name:"Index_login",
      component: Index_login,
      children: [
       
        { path: '/User_management', component: UserManagement }

        
      ]
    },
     {
      path: '/myTimetable',
      name: 'MTt',
      component: MTt
    }

  ]
})
