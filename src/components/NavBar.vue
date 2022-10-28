<template>
  <q-toolbar class="row justify-center bg-secondary">
    <q-tabs v-model="tab">
      <q-route-tab name="Main" label="Главная" to="/" />
      <q-route-tab name="Day" label="Распорядок на день" to="/day" />
      <q-route-tab name="Week" label="Распорядок на неделю" to="/week" />
    </q-tabs>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";
export default {
  components: {},
  setup() {
    return {
      tab: ref(""),
    };
  },
};
</script>

<style></style>
