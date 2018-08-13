import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    //{
    //  path: '/about',
    //  name: 'about',
    //  // route level code-splitting
    //  // this generates a separate chunk (about.[hash].js) for this route
    //  // which is lazy-loaded when the route is visited.
    //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //},
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/resortmap',
      name: 'resortmap',
      component: () => import('./views/Map.vue')
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('./views/Rates.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/404',
      name: 'notfound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/*',
      redirect: '/404'
    }
  ]
});
