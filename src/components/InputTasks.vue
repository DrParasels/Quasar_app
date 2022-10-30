<template>
  <q-input
    v-model="newTask"
    @keyup.enter="add"
    class="col"
    square
    bg-color="white"
    filled
    placeholder="Что нужно сделать"
    dense
  >
    <template v-slot:append>
      <q-btn @click="add" round dense flat icon="add" />
    </template>
  </q-input>
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
      newTask: "",
    };
  },
  methods: {
    add() {
      if (this.newTask.length === 0) {
        return;
      }
      this.$emit("add-task", this.newTask);
      this.newTask = "";
      console.log(this.newTask);
    },
  },
};
</script>

<style lang="scss" scoped></style>
