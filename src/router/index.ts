import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Views
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Actor from '../views/Actor.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/movie/*',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/actor/*',
    name: 'Actor',
    component: Actor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
