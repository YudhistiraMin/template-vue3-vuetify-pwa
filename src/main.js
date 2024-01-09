import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/Vuetify";
import validate from "./plugins/VeeValidate"
import axios from "./plugins/Axios";
import "@/assets/css/main.css";
import { TokenService } from "@/service/Storage.Service.js"

if (TokenService.getToken()) {
  store.commit("SET_TOKEN", TokenService.getToken())
  store.commit("SET_USER", JSON.parse(TokenService.getUser()))
}

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(validate)
app.use(axios);

app.mount("#app");
