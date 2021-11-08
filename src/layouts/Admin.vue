<template>
  <div id="app">
    <AdminNavBar />
    <slot />
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
export default {
  name: "AdminLayout",
  components: { AdminNavBar },
};
</script>

<style>
</style>
