import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import bContainer from 'bootstrap-vue/es/components/layout/container';
// import { Layout } from 'bootstrap-vue/es/components';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.component('b-container', bContainer);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

// Vue.use(Layout);

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
