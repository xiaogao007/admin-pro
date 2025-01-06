import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import './styles/reset.css'
import pinia from "./store/index";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");