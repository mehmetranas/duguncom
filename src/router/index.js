import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import SuccessMessage from "../views/SuccessMessage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form/:id",
    name: "Form",
    component: Form,
  },
  {
    path: "/success",
    name: "SuccessMessage",
    component: SuccessMessage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
