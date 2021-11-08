import Vue from "vue";
import axios from "axios";
import store from "../store";
Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
});
axios.defaults.headers.common["Authorization"] =
  "Bearer " + store.state.AuthModule.access_token || "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
