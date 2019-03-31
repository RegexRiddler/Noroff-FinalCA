import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('@/views/LandingPage.vue'),
    },
    {
      path: '/CardSearch',
      name: 'CardSearch',
      component: () => import('@/views/CardSearch.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
