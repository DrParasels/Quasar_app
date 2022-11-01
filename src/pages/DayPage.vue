<template>
  <h3>Распорядок на день</h3>
  <div class="inner row">
    <div class="day">
      <div class="row q-pa-sm bg-primary">
        <input-tasks @add-task="add" />
      </div>
      <q-list class="bg-white" separator>
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @update:model-value="task.done"
          @task-done="taskDone"
          @delete-task="deleteTask"
        />
      </q-list>
      <div class="text-h5 text-primary text-center" v-if="!tasks.length">
        Тут пока пусто
      </div>
    </div>
    <div class="pro">
      <q-circular-progress
        class="q-ma-md text-white"
        show-value
        reverse
        :value="value"
        size="200px"
        :thickness="0.6"
        font-size="25px"
        color="light-blue"
        center-color="grey-9"
        animation-speed="1s"
        track-color="teal"
      >
        {{ value }}%
      </q-circular-progress>
    </div>
  </div>
</template>

<script>
import InputTasks from "@/components/InputTasks.vue";
import TaskItem from "@/components/TaskItem.vue";
export default {
  components: { InputTasks, TaskItem },
  setup() {
    return {};
  },
  data() {
    return {
      tasks: [],
      value: 0,
    };
  },
  methods: {
    add(task) {
      this.tasks.push({
        id: this.tasks.length,
        title: task,
        done: false,
      });
      console.log(this.tasks);
    },
    taskDone(taskId) {
      this.tasks.forEach((t) => {
        if (t.id === taskId) {
          t.done = !t.done;
        }
      });
    },
    deleteTask(task) {
      console.log(task);
      this.tasks.splice(this.tasks.indexOf(task), 1);
      this.$q.notify("Задача удалена");
    },
  },
  computed: {
    findProgress() {
      if (this.tasks.length === 0) {
        return 0;
      }
      return Math.round(
        (this.tasks.filter((item) => item.done === true).length /
          this.tasks.length) *
          100
      );
    },
  },
  watch: {
    tasks: {
      handler() {
        this.value = this.findProgress;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  width: 100%;
  max-width: 700px;
}
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
