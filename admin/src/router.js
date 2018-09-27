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
      name: 'root',
      path: '/',
      component: Home
    },
    {
      name: 'users',
      path: '/users',
      component: Users
    },
    {
      name: 'user-detail',
      path: '/users/:id',
      component: User,
      props: route => ({ id: parseInt(route.params.id) })
    }
  ]
})
export default router

// TODO: メタフィールド、認証、リダイレクト、プログラム遷移
