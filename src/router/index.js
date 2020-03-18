import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/fail',
    name: 'fail',

    component: () => import('../views/Fail.vue')
  },
  {
    path: '/upLoad',
    name: 'upLoad',

    component: () => import('../views/UpLoad.vue')
  },
  {
    path: '/suc',
    name: 'suc',
    component: () => import('../views/Suc.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
