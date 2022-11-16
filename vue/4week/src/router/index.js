import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weather',
    name: 'WeatherView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/WeatherView.vue')
  },
  {
    path: '/todo',
    name: 'TodoView',
    component: () =>
      import(/* webpackChunkName: "todo" */ '../views/TodoView.vue')
  },
  {
    path: '/gallery',
    name: 'GalleryView',
    component: () =>
      import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
