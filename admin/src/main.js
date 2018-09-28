import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

/**
 * エントリポイント
 * vueに各種プラグインを登録する
 */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
