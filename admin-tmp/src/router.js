import Vue from 'vue'
import VueRouter from 'vue-router'

// 以下、コンポーネント
import Sidebar from '@/components/common/Sidebar'
import Home from '@/components/Home'

import Users from '@/components/user/Users'
import User from '@/components/user/User'
import UserSidebar from '@/components/user/UserSidebar'
import UserCharacters from '@/components/user/UserCharacters'

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
      components: {
        default: Home,
        sidebar: Sidebar
      }
    },
    {
      name: 'users',
      path: '/users',
      components: {
        default: Users,
        sidebar: Sidebar
      }
    },
    {
      name: 'user-detail',
      path: '/users/:id',
      components: {
        default: User,
        sidebar: UserSidebar
      },
      props: { default: route => ({ id: parseInt(route.params.id) }), sidebar: route => ({ id: parseInt(route.params.id) }) }
    },
    {
      name: 'user-characters',
      path: '/users/:id/user-characters',
      components: {
        default: UserCharacters,
        sidebar: UserSidebar
      },
      props: { default: route => ({ id: parseInt(route.params.id) }), sidebar: route => ({ id: parseInt(route.params.id) }) }
    }
  ]
})
export default router

// TODO: メタフィールド、認証、リダイレクト、プログラム遷移
