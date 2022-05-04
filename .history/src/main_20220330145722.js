import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
 

// createApp(App).use(store).use(router).mount("#app");
App.use(router).use(store).mount("#app");

// const app = createApp({App })

// app.use(store).use(router).mount("#app")