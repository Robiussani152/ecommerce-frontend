<template>
  <div id="app">
    <component :is="this.$route.meta.layout || layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import FrontLayout from "@/layouts/Front.vue";
export default {
  name: "AppLayout",
  data() {
    return {
      layout: FrontLayout,
    };
  },
};
</script>

<style>
</style>
