import VueRouter from 'vue-router'
import Vue from 'vue'
import test from './component/test.vue'
import testchildren from './component/testchildren.vue'
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/test', component: test, children: [
      { path: 'testchildren', component: testchildren }
    ] }
  ]
})


export default router

