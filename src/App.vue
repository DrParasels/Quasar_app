<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "LayoutDefault",

  components: { NavBar },

  setup() {
    return {};
  },
};
</script>
