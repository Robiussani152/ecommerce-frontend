import Vue from "vue";
import axios from "axios";
Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
});
axios.defaults.headers.common["Authorization"] = "test-token";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
