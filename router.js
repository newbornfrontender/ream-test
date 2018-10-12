import Router from 'vue-router';

export default () => {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: () => import('./pages/Index.vue'),
    }, {
      path: '/about',
      component: () => import('./pages/About.vue'),
    }],
  });
};
