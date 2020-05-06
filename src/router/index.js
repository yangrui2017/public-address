import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: '/member/',
  routes: [{
      path: '/',
      name: 'member-welcome',
      component: () => import('@/views/member-welcome'),
      meta: {
        title: '新用户'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my'),
      meta: {
        title: '我的奖励'
      }
    },
    {
      path: '/share-details',
      name: 'share-details',
      component: () => import('@/views/share-details'),
      meta: {
        title: '分享'
      }
    },
    {
      path: '/share-page',
      name: 'share-page',
      component: () => import('@/views/share-page'),
      meta: {
        title: '分享成功'
      }
    },
    {
      path: '/user-address',
      name: 'member-welcome',
      component: () => import('@/views/user-address'),
      meta: {
        title: '区域查询'
      }
    },
    {
      path: '/mm-activity',
      name: 'mm-activity',
      component: () => import('@/views/mm-activity'),
      meta: {
        title: '我的分享活动'
      }
    },
    {
      path: '/news-information',
      name: 'news-information',
      component: () => import('@/views/news-information'),
      meta: {
        title: '新闻'
      }
    },
    {
      path: '/technicians',
      name: 'technicians',
      component: () => import('@/views/technicians'),
      meta: {
        title: '加入E帮洗车'
      }
    },
    {
      path: '/push-message1',
      name: 'push-message1',
      component: () => import('@/views/push-message1'),
      meta: {
        title: '推送消息'
      }
    },
    {
      path: '/push-message2',
      name: 'push-message2',
      component: () => import('@/views/push-message2'),
      meta: {
        title: '推送消息'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
