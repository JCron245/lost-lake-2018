import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: 'Home - Lost Lake Resort' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue'),
      meta: { title: 'Services - Lost Lake Resort' }
    },
    {
      path: '/resortmap',
      name: 'resortmap',
      component: () => import('./views/Map.vue'),
      meta: { title: 'Campground Map - Lost Lake Resort' }
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('./views/Rates.vue'),
      meta: { title: 'Rates - Lost Lake Resort' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: { title: 'Contact - Lost Lake Resort' }
    },
    {
      path: '/404',
      name: 'notfound',
      component: () => import('./views/NotFound.vue'),
      meta: { title: '404 - Lost Lake Resort' }
    },
    {
      path: '/*',
      redirect: '/404'
    }
  ]
});

router.afterEach((to) => {
    document.title = to.meta.title || "Lost Lake Resort";
});

export default router;
