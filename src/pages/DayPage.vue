<template>
  <h3>Распорядок на день</h3>

  <div class="day">
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) of tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
          <q-item-label caption>Описание задачи</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            unelevated
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <input-tasks @add-task="add" />
  </div>
</template>

<script>
import InputTasks from "@/components/InputTasks.vue";
export default {
  components: { InputTasks },
  setup() {
    return {};
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    add(task) {
      this.tasks.push({
        title: task,
        done: false,
      });
      console.log(this.tasks);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.$q.notify("Задача удалена");
    },
  },
};
</script>

<style lang="scss" scoped>
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
