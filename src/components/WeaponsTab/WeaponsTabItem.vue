<template>
  <router-link :to="`/weapon_statistics/${id}`" class="item">
    <div class="item__header">
      <h3>{{ name }}</h3>
    </div>

    <div class="item__icon">
      <component v-if="iconComponent" :is="iconComponent" />
    </div>
  </router-link>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const props = defineProps({
  id: Number,
  icon: String,
  name: String,
});

const iconComponent = ref(null);

iconComponent.value = defineAsyncComponent(() =>
  import(`@/icons/weapons/${props.icon}.vue`)
);
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 90px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  color: unset;
  text-decoration: none;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 25px;
    background: rgba(255, 255, 255, 0.05);

    & > h3 {
      font-size: 12px;
      font-weight: 600;
      opacity: 0.9;
    }
  }

  &__icon {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      width: 80px;
      fill: var(--weapon-icon);
    }
  }
}
</style>
