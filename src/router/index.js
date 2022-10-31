import { createRouter, createWebHistory } from "vue-router";
import MyLayout from "@/layouts/MyLayout.vue";
import MainPage from "@/pages/MainPage.vue";
import DayPage from "@/pages/DayPage.vue";
import WeekPage from "@/pages/WeekPage.vue";

const routes = [
  {
    path: "/",
    component: MyLayout,
    children: [
      { path: "", component: MainPage },
      { path: "/day", component: DayPage },
      { path: "/week", component: WeekPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
