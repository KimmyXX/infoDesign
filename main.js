import Vue from 'vue'
import App from './component/App.vue'
import router from './router'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})