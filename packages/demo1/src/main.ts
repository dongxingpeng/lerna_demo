import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Api from 'lib_modules';
import '@/api';
import '@/config/env'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
