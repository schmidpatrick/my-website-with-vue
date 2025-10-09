import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./main.css"; // keep Tailwind setup

createApp(App).use(router).mount("#app");
