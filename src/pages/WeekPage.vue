<template>
  <h3>Распорядок на неделю</h3>
  <div class="row q-pa-sm bg-primary">
    <input-tasks @add-task="add" />
  </div>
  <div class="week">
    <!-- <q-list class="bg-white" separator>
      <q-item
        v-for="(task, index) of weekTasks"
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
    </q-list> -->
  </div>
  <drag-and-drop :weekTasks="weekTasks" />
</template>

<script>
import InputTasks from "@/components/InputTasks.vue";
import DragAndDrop from "@/components/DragAndDrop.vue";

export default {
  components: { InputTasks, DragAndDrop },
  setup() {
    return {};
  },
  data() {
    return {
      weekTasks: [
        {
          title: "Hi",
          done: false,
        },
        {
          title: "Hello",
          done: false,
        },
        {
          title: "Bye",
          done: false,
        },
      ],
    };
  },
  methods: {
    add(task) {
      this.weekTasks.push({
        title: task,
        done: false,
      });
      console.log(this.tasks);
    },
    deleteTask(index) {
      this.weekTasks.splice(index, 1);
      this.$q.notify("Задача удалена");
    },
  },
};
</script>

<style lang="scss" scoped></style>
