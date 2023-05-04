import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import "./assets/css/animation.scss";
import App from "./App.vue";
import router from "./router/router";
import quasar from "./plugin/quasar";
import VueApexCharts from "vue3-apexcharts";
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty("--animate-duration", "2s");

// All animations will take half the time to accomplish
document.documentElement.style.setProperty("--animate-duration", ".5s");

import { Notify } from "quasar";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

Notify.registerType("my-noti", {
  icon: "announcement",
  progress: true,
  color: "primary",
  textColor: "white",
});

Notify.registerType("positive", {
  icon: "fa-solid fa-circle-check",
  progress: true,
  textColor: "blue-8",
});

const pinia = createPinia();
const myApp = createApp(App);
myApp.use(pinia);
myApp.use(quasar);
myApp.use(router);
myApp.use(VueApexCharts);
myApp.mount("#app");
