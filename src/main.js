import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/Vuetify";
import validate from "./plugins/VeeValidate"
import axios from "./plugins/Axios";
import "@/assets/css/main.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(validate)
app.use(axios);

app.mount("#app");
