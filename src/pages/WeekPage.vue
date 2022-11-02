<template>
  <h3>Распорядок на неделю</h3>
  <div class="week">
    <div class="hooo">
      <div class="inner">
        <div v-for="(item, index) in weekArr" :key="item.id" class="col-3 row">
          <draggable
            class="list-group"
            :list="item.list"
            group="tasks"
            itemKey="id"
          >
            <template #item="{ element }">
              <task-item
                :task="element"
                @update:model-value="element.done"
                @task-done="taskDone"
                @delete-task="deleteTask"
              />
            </template>
            <template #header>
              <div
                class="btn-group list-group-item"
                role="group"
                aria-label="Basic example"
              >
                <span class="list-name">{{ item.name }}</span>
                <q-btn
                  class="glossy"
                  size="10px"
                  round
                  color="secondary"
                  icon="created"
                  @click="add(index)"
                />
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "../../node_modules/vuedraggable";
// import InputTasks from "@/components/InputTasks.vue";
import TaskItem from "@/components/TaskItem.vue";
export default {
  components: { TaskItem, draggable },
  setup() {},
  data() {
    return {
      weekArr: [
        { name: "Общие", list: [] },
        { name: "Понедельник", list: [] },
        { name: "Вторник", list: [] },
        { name: "Среда", list: [] },
        { name: "Четверг", list: [] },
        { name: "Пятница", list: [] },
        { name: "Суббота", list: [] },
        { name: "Воскресенье", list: [] },
      ],
    };
  },
  methods: {
    add1(index, model) {
      this.weekArr[index].list.push({
        id: this.findMaxValue,
        title: model,
        done: false,
      });
    },
    taskDone(taskId) {
      this.weekArr.forEach((t) => {
        t.list.forEach((t) => {
          if (t.id === taskId) {
            t.done = !t.done;
          }
        });
      });
    },
    deleteTask(task) {
      this.weekArr.forEach((t) => {
        if (t.list.includes(task)) {
          t.list.splice(t.list.indexOf(task), 1);
        }
      });

      this.$q.notify("Задача удалена");
    },
    add(index) {
      this.$q
        .dialog({
          title: "Добавить задачу",
          cancel: true,
          prompt: {
            model: "",
            type: "text",
          },
        })
        .onOk((model) => {
          if (model.length === 0) {
            return;
          }
          this.add1(index, model);
        });
    },
  },
  computed: {
    findMaxValue() {
      let maxValue = 0;
      this.weekArr.forEach((item) => {
        if (item.list.length > 0) {
          item.list.forEach((t) => {
            if (t.id > maxValue) {
              maxValue = t.id;
            }
          });
        }
      });
      maxValue++;
      return maxValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.hooo {
  width: 100%;
}
.inner {
  display: flex;
  flex-wrap: wrap;
}
.list-group {
  width: 400px;
  min-height: 200px;
  margin: 5px;
  border: 2px solid teal;
  border-radius: 10px;
}
.list-group-item {
  padding: 15px;
  border-bottom: 2px solid teal;
}

.btn-group {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.week-item {
  display: flex;
  justify-content: center;
  max-width: 280px;
  border: 1px solid teal;
  border-radius: 10px;
  font-size: 16px;
}
</style>
