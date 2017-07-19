// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/reset.css'
import moment from 'moment'
import store from './vuex/store'
import 'babel-polyfill'


Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'static/img/logo.png',
  loading: 'static/img/logo1.png',
  attempt: 3
})
Vue.filter('moment', (value, formatString = 'YYYY-MM-DD')=>{
   return moment(value).format(formatString);
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
