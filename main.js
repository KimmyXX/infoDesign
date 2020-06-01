import Vue from 'vue'
import App from './component/App.vue'
import router from './router'
import VueResource from 'vue-resource'
import './ui/element'
Vue.use(VueResource)

// 创建根元素
let root = document.createElement('div')
root.setAttribute('id','app')
document.body.appendChild(root)

function* generator() {
  yield 1;
  yield 2;
  return 3;
}
let it = generator();
console.log(it.next());

new Vue({
  el: '#app',
  render: h => h(App),
  router
})