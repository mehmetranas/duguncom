import Vuex from "vuex";
import Vue from "vue";
import Companies from "./modules/companies";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    Companies,
  },
});
