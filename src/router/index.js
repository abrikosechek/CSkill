import { createWebHistory, createRouter } from "vue-router";

import WeaponStatistics from "../pages/WeaponStatistics.vue";

const routes = [
  { path: "/", redirect: "/weapon_statistics" },
  { path: "/weapon_statistics", component: WeaponStatistics },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
