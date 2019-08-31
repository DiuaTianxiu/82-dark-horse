import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Login from './login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',

      component: Login
    },
    {
      path: '/',
      redirect: './login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './home')
    }
  ]
})
