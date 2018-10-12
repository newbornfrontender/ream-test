import createRouter from './router';

export default () => { return {
  router: createRouter(),
  error: () => import('./pages/Error.vue'),
}};
