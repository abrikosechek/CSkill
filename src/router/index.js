import { createWebHistory, createRouter } from "vue-router";

import WeaponStatistics from "../pages/WeaponStatistics.vue";
import WeaponInfo from "../pages/WeaponInfo.vue";

const routes = [
  { path: "/", redirect: "/weapon_statistics" },
  {
    path: "/weapon_statistics",
    component: WeaponStatistics,
    children: [
      {
        path: ":weapon_id",
        component: WeaponInfo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
