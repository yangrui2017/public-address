import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode:"history",
  base:"/",
  routes: [{
      path: '/',
      name: 'total-sharing',
      component: () => import('@/views/total-sharing')
    },
    {
      path: '/car-wash',
      name: 'car-wash',
      component: () => import('@/views/car-wash')
    },
    {
      path: '/company',
      name: 'company-profile',
      component: () => import('@/views/company-profile')
    },
    {
      path: '/tech-recruitment',
      name: 'tech-recruitment',
      component: () => import('@/views/tech-recruitment')
    },
    {
      path: '/tech-promotion',
      name: 'tech-promotion',
      component: () => import('@/views/tech-promotion')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    },
    {
      path: '/user-sharing',
      name: 'user-sharing',
      component: () => import('@/views/user-sharing')
    },
    {
      path: '/share-page',
      name: 'share-page',
      component: () => import('@/views/share-page')
    }
  ]
})
router.afterEach((to, from) => { // 跳转后，不需要 next
//路由每次走

})


export default router
