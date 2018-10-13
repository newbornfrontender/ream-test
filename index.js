import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default () => { return {
  document: ({ headTags, scripts }) => `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />

        ${headTags()}
      </head>

      <body>
        <!--ream-root-placeholder-->

        ${scripts()}
      </body>
    </html>
  `,

  root: () => import('./Root.vue'),

  router: new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: () => import('./views/Index.vue'),
    }, {
      path: '/about',
      component: () => import('./views/About.vue'),
    }],
  }),

  error: () => import('./views/Error.vue'),
}};
