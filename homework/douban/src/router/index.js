import Vue from 'vue'
import VueRouter from 'vue-router'
import Douban from '../views/Douban.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Douban
  }
]

const router = new VueRouter({
  routes
})

export default router
