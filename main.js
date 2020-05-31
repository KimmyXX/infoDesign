import Vue from 'vue'
import App from './component/App.vue'
import router from './router'
import VueResource from 'vue-resource'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

Vue.use(VueResource)

// 创建根元素
let root = document.createElement('div')
root.setAttribute('id','app')
document.body.appendChild(root)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})