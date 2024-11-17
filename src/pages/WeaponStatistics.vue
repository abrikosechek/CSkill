<template>
  <h1>Weapon statistics</h1>

  <div class="content">
    <div class="content__tabs">
      <ak47 id="ICON" />
    </div>
  </div>
</template>

<script setup>
import { ak47 } from "../icons/weapons";
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
