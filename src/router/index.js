import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../layout/login.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import( "../layout/registration.vue"),
  },
  {
    path: "/homeee",
    name: "home",
    component: () =>
      import( "../views/homeee.vue"),
  },
  {
    path: "/chitiet",
    name: "chitiet",
    component: () =>
      import( "../views/chitiet.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

});

export default router;
