import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Store
import store from "./store";

// Style
import "./assets/styles/index.css";

// Ant Design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
