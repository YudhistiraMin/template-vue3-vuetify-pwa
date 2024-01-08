const Login = () => import("@/views/public/Login.vue")

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Masuk"
    }
  },
];
export default routes.map((route) => {
  const meta = {
    all: false,
    public: true,
    onlyLoggedOut: true,
    title: route.meta.title,
  };
  return { ...route, meta };
});
