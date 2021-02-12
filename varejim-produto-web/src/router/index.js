import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
    props: route => route.query
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
