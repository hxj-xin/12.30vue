import Vue from 'vue'
import VueRouter from 'vue-router'
import photoImg from '../views/photoImg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'photo',
    component: photoImg
  },
  {
    path: '/hotTown',
    name: 'hotTown',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/hotTown.vue')
    }
  },
  {
    path: '/Toubu',
    name: 'Toubu',
    component: function (){
      return import('../components/Toubu.vue')
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
