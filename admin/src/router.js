import Vue from 'vue'
import VueRouter from 'vue-router'

// 以下、コンポーネント
import Home from '@/components/Home'
import Users from '@/components/user/Users'
import User from '@/components/user/User'

Vue.use(VueRouter)

/**
 * ルーター
 * ルーティングを行う
 */
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/users/:id',
      component: User
    }
  ]
})
export default router
