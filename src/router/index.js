import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home/HomePage.vue'
import ManagementPage from '@/components/management/Management.vue'

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
      component: ManagementPage
      // beforeEnter: (to, from, next) => {
      //   debugger
      // }
    }
  ]
})
