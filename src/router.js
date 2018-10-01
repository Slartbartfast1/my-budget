import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import New from './views/New.vue'
import List from './views/List.vue'
import Charts from './views/Charts.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component:New
    },
      {
      path: '/list',
      name: 'List',
      component:List
    },
      {
      path: '/charts',
      name: 'Charts',
      component:Charts
    },

  ]
})
