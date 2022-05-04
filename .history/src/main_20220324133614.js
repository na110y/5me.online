import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue from 'vue';
import Vuex from 'vuex';
createApp(App).use(store).use(router).mount("#app");

import { index } from './index.js';
Vue.use(Vuex);
new Vue({
  index,
});