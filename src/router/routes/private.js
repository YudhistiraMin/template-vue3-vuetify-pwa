const Dashboard = () => import('@/views/private/Dashboard/Index.vue')

const routes = [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: 'Beranda'
      }
    },
  ]
  export default routes.map(route => {
    const meta = {
    public: false,
    title: route.meta.title,
    roles: route.meta.roles,
    }
    return { ...route, meta }
  })