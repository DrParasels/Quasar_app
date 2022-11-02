<template>
  <q-item
    @click="$emit('taskDone', task.id)"
    :class="{ 'done bg-blue-1': task.done }"
    clickable
    v-ripple
  >
    <q-item-section avatar>
      <q-checkbox
        :model-value="task.done"
        :value="task"
        color="primary"
        class="no-pointer-events"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ task.title }}</q-item-label>
    </q-item-section>
    <q-item-section v-if="task.done" side>
      <q-btn
        @click.stop="$emit('deleteTask', task)"
        unelevated
        round
        dense
        color="primary"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checkedT: false,
    };
  },
  methods: {},
  computed: {
    checked: {
      get() {
        return this.task.done;
      },
      set(val) {
        this.checkedP = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
