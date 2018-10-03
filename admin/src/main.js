import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import css from './bootstrap-css'

Vue.config.productionTip = false

/**
 * エントリポイント
 * vueに各種プラグインを登録する
 */
new Vue({
  router,
  store,
  css,
  render: h => h(App)
}).$mount('#app')
