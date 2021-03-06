import Vue from "vue";
import axios from "axios";
import store from "../store";
import router from "@/router";

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
});

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

Vue.prototype.$axios.interceptors.request.use((config) => {
  let accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers = Object.assign(
      {
        Authorization: `Bearer ${accessToken}`,
      },
      config.headers
    );
  }
  return config;
});

Vue.prototype.$axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      console.log("data check");
      store.commit("remove_auth_state");
      router.push("/");
    }
    return Promise.reject(error);
  }
);
