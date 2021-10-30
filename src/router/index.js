import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
]

const router = new VueRouter({
  routes
})

export default router
