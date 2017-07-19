import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import List from '@/view/list'
import Detail from '@/view/detail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path : "/list",
      name: 'list',
      component: List
    },
    {
      path : "/detail",
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
