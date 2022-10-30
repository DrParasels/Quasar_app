<template>
  <h3>Главная страница</h3>
  <div class="inner">
    <div class="photo">
      <q-img
        style="height: 300px; width: 200px; border-radius: 10px"
        spinner-color="white"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
      </q-img>
      <q-btn class="photo__btn" push color="teal" label="Изменить" />
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

export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
}
.photo {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>
