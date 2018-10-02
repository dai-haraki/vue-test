import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Home from './components/Home.vue';
import Sidebar from './components/common/Sidebar.vue';

import Users from './components/user/Users.vue';
import User from './components/user/User.vue';
import UserSidebar from './components/user/UserSidebar.vue';
import UserCharacters from './components/user/UserCharacters.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        sidebar: Sidebar
      },
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
  ],
});
