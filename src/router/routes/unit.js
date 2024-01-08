const Unit = () => import(/* webpackPrefetch: true */ '@/views/private/unit/Index.vue')

const routes = [
  {
    path: "/unit",
    name: "unit",
    component: Unit,
    meta: {
      title: "Unit"
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