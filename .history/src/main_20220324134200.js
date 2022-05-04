// import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// createApp(App).use(store).use(router).mount("#app");
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})