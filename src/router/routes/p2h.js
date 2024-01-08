const P2h = () => import(/* webpackPrefetch: true */ '@/views/private/p2h/Index.vue')

const routes = [
  {
    path: "/p2h",
    name: "p2h",
    component: P2h,
    meta: {
      title: "P2H"
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