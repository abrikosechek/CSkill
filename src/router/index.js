import { createMemoryHistory, createRouter } from "vue-router";

import WeaponStatistics from "../pages/WeaponStatistics.vue";

const routes = [
  { path: "/", redirect: "/weapon_statistics" },
  { path: "/weapon_statistics", component: WeaponStatistics },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
