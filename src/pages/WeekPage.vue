<template>
  <h3>Распорядок на неделю</h3>
  <input-tasks />
  <div class="day">
    <div class="day__list">
      <div class="day__item">Съесть банан</div>
    </div>
  </div>
  <drag-and-drop />
</template>

<script>
import InputTasks from "@/components/InputTasks.vue";
import DragAndDrop from "@/components/DragAndDrop.vue";

export default {
  components: { InputTasks, DragAndDrop },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
