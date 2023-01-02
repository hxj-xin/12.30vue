import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotoWall from '../views/PhotoWall.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PhotoWall
  }
]

const router = new VueRouter({
  routes
})

export default router
