<template>
  <div id="app">
    <loading-component v-if="isLoading"></loading-component>
    <component
      :is="this.$route.meta.layout || layout"
      @logoutUser="logoutUser()"
    >
      <router-view />
    </component>
  </div>
</template>

<script>
import LoadingComponent from "@/components/Loading";
import FrontLayout from "@/layouts/Front.vue";
import { mapGetters } from "vuex";
import { logout } from "@/api/urls.js";
export default {
  name: "AppLayout",
  components: {
    LoadingComponent,
  },
  data() {
    return {
      layout: FrontLayout,
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "get_is_loading",
    }),
  },
  methods: {
    logoutUser() {
      let self = this;
      self.$store.commit("set_is_loading", true);
      self.$axios
        .post(logout)
        .then((res) => {
          self.$store.commit("remove_auth_state", null);
          self.$router.push({ name: "Home" });
        })
        .catch((error) => {
          self.$toastr.e("Something went wrong!");
        })
        .finally(() => {
          self.$store.commit("set_is_loading", false);
        });
    },
  },
};
</script>

<style>
</style>
