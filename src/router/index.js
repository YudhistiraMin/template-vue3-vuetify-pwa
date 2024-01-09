import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index.js';
import routes from '@/router/routes/index';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: '/404'
    },
    {
      path: '/',
      redirect: '/dashboard'
    }
  ].concat(routes)
})

router.beforeEach((to, from, next) => {
  const authenticated = store.state.authenticated
  const isAll = to.matched.some(record => record.meta.all)
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
  const isPublic = to.matched.some(record => record.meta.public)
  if (!isAll && !isPublic && !authenticated) {
    return next({
      path: "/login"
    })
  }
  if (authenticated && onlyLoggedOut) {
    return next("/")
  }
  document.title = `${to.meta.title} | P2H`;
  next()
})

export default router;
