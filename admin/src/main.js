import Vue from 'vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'

/**
 * エントリポイント
 * vueに各種プラグインを登録する
 */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
