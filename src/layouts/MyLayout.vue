<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="row justify-center">
        <q-tabs v-model="tab">
          <q-route-tab name="Main" label="Главная" to="/" />
          <q-route-tab name="Day" label="Распорядок на день" to="/day" />
          <q-route-tab name="Week" label="Распорядок на неделю" to="/week" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      leftDrawer: false,
      tab: ref(""),
    };
  },
};
</script>

<style lang="scss" scoped></style>
