import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/cardSearch',
      name: 'card-search',
      component: () => import('@/views/CardSearch.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
