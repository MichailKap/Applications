import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/TasksList.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import('../views/Pagination.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
