import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import AuthModule from "./auth";
import General from "./general";
import Cart from "./cart";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    AuthModule,
    General,
    Cart,
  },
});
