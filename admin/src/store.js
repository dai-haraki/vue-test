import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user.js'

Vue.use(Vuex)

/**
 * ストア
 * アプリケーション内のデータの状態管理を行う
 */
export default new Vuex.Store({
  modules: {
    user
  },
})
