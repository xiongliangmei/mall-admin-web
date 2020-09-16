import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login'
import Layout from '../views/layout/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
export default router
