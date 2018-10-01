import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users.js'
import userCharacters from '@/store/user-characters.js'

Vue.use(Vuex)

/**
 * ストア
 * アプリケーション内のデータの状態管理を行う
 */
export default new Vuex.Store({
  modules: {
    users,
    userCharacters
  }
})
