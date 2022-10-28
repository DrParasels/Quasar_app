<template>
  <div>
    <q-input
      standout="bg-teal text-white w-500"
      v-model="task"
      placeholder="Что нужно сделать"
    />

    <q-btn @click="add" color="primary" label="Добавить" />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  emits: {
    "add-task": (value) => typeof value === "string" && value.length > 0,
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    add() {
      if (this.task.length === 0) {
        return;
      }
      this.$emit("add-task", this.task);
      this.task = "";
      console.log(this.task);
    },
  },
};
</script>

<style lang="scss" scoped></style>
