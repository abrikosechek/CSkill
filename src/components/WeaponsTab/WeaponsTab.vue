<template>
  <div class="weapons__tab">
    <div class="weapons__tab__header">
      <component :is="headerIcon" class="weapons__tab__header__icon" />
    </div>

    <div class="weapons__tab__content">
      <WeaponsTabItem v-for="item in items" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import WeaponsTabItem from "./WeaponsTabItem.vue";

const props = defineProps({
  items: Object,
  category_icon: String,
});

const headerIcon = ref(null);

headerIcon.value = defineAsyncComponent(() =>
  import(`@/icons/weapons/${props.category_icon}.vue`)
);
</script>

<style scoped lang="scss">
.weapons__tab {
  display: flex;
  width: 100%;
  background: var(--bg-transparent);
  border-radius: 8px;

  &__header {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;

    &__icon {
      flex: 0 0 auto;
      transform: rotate(270deg);
      height: 30px;
      fill: var(--weapon-icon);
    }
  }

  &__content {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    justify-items: center;
    gap: 5px;
    padding: 5px;
  }
}
</style>
