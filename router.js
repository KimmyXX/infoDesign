import VueRouter from 'vue-router'
import Vue from 'vue'
import test from './component/test.vue'
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/test', component: test }
  ]
})


export default router

