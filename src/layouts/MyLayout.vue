<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <nav-bar />
    </q-header>

    <q-page-container class="q-px-md">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
