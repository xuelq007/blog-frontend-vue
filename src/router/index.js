import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/management',
      name: 'ManagementPage',
      component: resolve => require(['@/components/management/Management.vue'], resolve)
      // beforeEnter: (to, from, next) => {
      //   debugger
      // }
    }
  ]
})
