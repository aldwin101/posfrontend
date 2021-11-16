import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Order from '../views/Order.vue'
import Table from '../views/Table.vue'
import Dishes from '../views/Dishes.vue'
import Employees from '../views/Employees'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/dishes',
    name: 'Dishes',
    component: Dishes
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
]

const router = new VueRouter({
  routes
})

export default router
