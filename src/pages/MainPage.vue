<template>
  <h3>Главная страница</h3>
  <div class="inner">
    <div class="photo">
      <q-img
        :src="imageUrl"
        spinner-color="white"
        style="height: 400px; width: 600px"
      ></q-img>
      <q-file
        v-model="image"
        style="width: 600px"
        @update:model-value="handleUpload()"
      ></q-file>
    </div>

    <div class="statistics">
      <h4 class="statistic__title q-px-md q-my-none">
        Статистика выполненных задач
      </h4>
      <ul>
        <li>Прогресс за день</li>
        <li>Прогресс за неделю</li>
      </ul>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" />
      </div>
    </div>
  </div>
  <div class="achivements">
    <h4>Достижения</h4>
    <ul class="achivements__list">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
export default {
  setup() {
    const image = ref(null);
    const imageUrl = ref("");
    const handleUpload = () => {
      console.log("handleUpload is triggered");
      if (image.value) {
        imageUrl.value = URL.createObjectURL(image.value);
      }
    };

    return {
      image,
      imageUrl,
      handleUpload,
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  justify-content: space-between;
}
.photo {
  display: flex;
  flex-direction: column;
  justify-content: start;
  &__btn {
    margin-top: 15px;
    display: block;
  }
  img {
    display: block;
  }
}

.achivements {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    text-align: center;
  }
}

.q-field__native {
  display: none;
}
</style>
