<template>
  <h3>Распорядок на день</h3>

  <q-input
    stack-label="false"
    standout="bg-teal text-white w-500"
    v-model="text"
    label="Что нужно сделать"
  />

  <q-btn color="primary" label="Добавить" />
  <br />
  <div class="day">
    <div class="day__list">
      <div class="day__item">Съесть банан</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  justify-content: space-between;
}
</style>
