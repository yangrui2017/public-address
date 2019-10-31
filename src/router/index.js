import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode:"history",
  base:"/member/",
  routes: [
    {
      path: '/',
      name: 'user-sharing',
      component: () => import('@/views/user-sharing')
    },
    {
      path: '/shopping-mall',
      name: 'shopping-mall',
      component: () => import('@/views/shopping-mall')
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import('@/views/user-list')
    },
    {
      path: '/user-content',
      name: 'user-content',
      component: () => import('@/views/user-content')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    },
    {
      path: '/share-details',
      name: 'share-details',
      component: () => import('@/views/share-details')
    },
    {
      path: '/share-page',
      name: 'share-page',
      component: () => import('@/views/share-page')
    },
    {
      path: '/wash-service',
      name: 'wash-service',
      component: () => import('@/views/wash-service')
    },
    {
      path: '/member-welcome',
      name: 'member-welcome',
      component: () => import('@/views/member-welcome')
    },
    {
      path: '/user-address',
      name: 'member-welcome',
      component: () => import('@/views/user-address')
    },
    {
      path: '/mm-activity',
      name: 'mm-activity',
      component: () => import('@/views/mm-activity')
    },
    {
      path: '/news-information',
      name: 'news-information',
      component: () => import('@/views/news-information')
    }
    
  ]
})
router.afterEach((to, from) => { // 跳转后，不需要 next
//路由每次走
})


export default router
