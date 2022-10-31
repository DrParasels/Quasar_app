<template>
  <div class="hooo">
    <div class="col-3">
      <draggable
        class="row list-group1"
        :list="weekTasks"
        group="tasks"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <q-item
            class="week-item"
            @click="element.done = !element.done"
            :class="{ 'done bg-blue-1': element.done }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-checkbox
                v-model="element.done"
                color="primary"
                class="no-pointer-events"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ element.title }}</q-item-label>
            </q-item-section>
            <q-item-section v-if="element.done" side>
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
        </template>
      </draggable>
    </div>
    <div class="inner">
      <div v-for="item in weekArr" :key="item" class="col-3 row">
        <draggable
          class="list-group"
          :list="item.list"
          group="tasks"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <q-item
              class="week-item bg-blue-2"
              @click="element.done = !element.done"
              :class="{ 'done bg-blue-1': element.done }"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-checkbox
                  v-model="element.done"
                  color="primary"
                  class="no-pointer-events"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ element.title }}</q-item-label>
              </q-item-section>
              <q-item-section v-if="element.done" side>
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
                icon="add"
              />
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "../../node_modules/vuedraggable";
export default {
  props: {
    weekTasks: {
      type: Array,
      required: true,
    },
  },
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      weekArr: [
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
    // add: function () {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function () {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function (el) {
    //   return {
    //     name: el.name + " cloned",
    //   };
    // },
    // log: function (evt) {
    //   window.console.log(evt);
    // },
  },
};
</script>

<style scoped>
.hooo {
  width: 100%;
}
.inner {
  display: flex;
  flex-wrap: wrap;
}
.list-group {
  width: 300px;
  min-height: 200px;
  margin: 20px;
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
