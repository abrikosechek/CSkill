<template>
  <h1>Weapon statistics</h1>

  <div class="content">
    <div class="content__tabs">
      <WeaponsTab v-for="tab in tabs" :key="tab.category"  v-bind="tab" />
    </div>
  </div>
</template>

<script setup>
import { tabs } from "./const";
import WeaponsTab from "@/components/WeaponsTab";
</script>

<style scoped lang="scss">
.content {
  width: 100%;

  &__tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
