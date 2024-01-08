const Dashboard = () => import(/* webpackPrefetch: true */ '@/views/private/dashboard/Index.vue')

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      title: "Beranda"
    }
  },
]

export default routes.map(route => {
  const meta = {
    all: false, 
    public: false,
    title: route.meta.title
  }
  return { ...route, meta }
})