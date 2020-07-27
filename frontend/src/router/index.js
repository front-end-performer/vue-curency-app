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
    // component: Recent
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Recent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
