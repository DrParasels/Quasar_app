<template>
  <h3>Распорядок на неделю</h3>
  <input-tasks />
  <div class="day">
    <div class="day__list">
      <div class="day__item">Съесть банан</div>
    </div>
  </div>
</template>

<script>
import InputTasks from "@/components/InputTasks.vue";
export default {
  components: { InputTasks },
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
