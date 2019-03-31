import Vue from 'vue';
import Router from 'vue-router';

import LandingPage from '@/views/LandingPage.vue';
import CardSearch from '@/views/CardSearch.vue';
import CardDetails from '@/views/CardDetails.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '/CardSearch',
      name: 'card-search',
      component: CardSearch,
    },
    {
      path: '/CardDetails/:id',
      name: 'card-details',
      component: CardDetails,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
