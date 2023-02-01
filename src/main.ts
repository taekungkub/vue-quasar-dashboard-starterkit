import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import router from "./router/router";
import quasar from "./quasar";

const pinia = createPinia();
const myApp = createApp(App);
myApp.use(pinia);
myApp.use(quasar);
myApp.use(router);
myApp.mount("#app");
