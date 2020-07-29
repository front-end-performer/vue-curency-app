import Vue from "vue";
import VueRouter from "vue-router";
import Display from "../components/Display.vue";
// import Recent from "../views/Recent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Display",
    component: Display
  },
  {
    path: "/api/recent",
    name: "Recent",
    component: () => import("../views/Recent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
