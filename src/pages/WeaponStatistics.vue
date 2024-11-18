<template>
  <h1>Weapon statistics</h1>

  <div class="content">
    <div class="content__tabs">
      <WeaponsTab
        v-for="tab in tabs"
        :key="tab.category"
        v-bind="tab"
        :is_active="weaponPageShown"
      />
    </div>

    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { tabs } from "./const";
import WeaponsTab from "@/components/WeaponsTab";

const route = useRoute();

const weaponPageShown = computed(
  () => (weaponPageShown.value = !!route.params.weapon_id)
);
</script>

<style scoped lang="scss">
.content {
  position: relative;
  width: 100%;

  &__tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.5s linear;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  left: 100% !important;
}
</style>
