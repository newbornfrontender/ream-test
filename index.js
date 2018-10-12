import createRouter from './router';
import ErrorPage from './pages/Error.vue';

export default () => { return {
  router: createRouter(),
  error: ErrorPage,
}};
