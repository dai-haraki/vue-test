import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users.js'
import userCharacters from '@/store/user-characters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    userCharacters
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
