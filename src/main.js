import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
import "./plugin/axios";
import "./plugin/vform";
import "./plugin/toastr";
import "./plugin/vue-swal";

Vue.component("pagination", require("laravel-vue-pagination"));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
