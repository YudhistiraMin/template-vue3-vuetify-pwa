const Page404 = () => import(/* webpackPrefetch: true */ '@/views/public/404.vue')

const routes = [
  {
    path: "/404",
    name: "404",
    component: Page404,
    meta: {
      title: "404"
    }
  }
]

export default routes.map(route => {
  const meta = {
    all: true,
    title: route.meta.title 
  }
  return { ...route, meta }
})