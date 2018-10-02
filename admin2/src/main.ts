import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false;
library.add(faHome);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
