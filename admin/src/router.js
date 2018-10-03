import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

// TODO: コンポーネントとviewsのみを明確に分けているみたい

// 以下、コンポーネント
import Sidebar from '@/components/common/Sidebar.vue'
import Home from '@/components/Home'

import Users from '@/components/user/Users'
import User from '@/components/user/User'
import UserSidebar from '@/components/user/UserSidebar'
import UserCharacters from '@/components/user/UserCharacters'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
