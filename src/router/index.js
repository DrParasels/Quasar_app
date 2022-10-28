import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("@/pages/MainPage.vue") },
      { path: "/day", component: () => import("@/pages/DayPage.vue") },
      { path: "/week", component: () => import("@/pages/WeekPage.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
