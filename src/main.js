import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import qs from 'qs';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$qs = qs;
Vue.prototype.$axios=Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
