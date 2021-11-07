<template>
  <div id="app">
    <NavBar></NavBar>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FrontLayout",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
</style>
