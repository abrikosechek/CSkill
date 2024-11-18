<template>
  <div class="weapons__tab">
    <div
      class="weapons__tab__header"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <component :is="headerIcon" class="weapons__tab__header__icon" />
    </div>

    <div
      class="weapons__tab__content"
      :class="{ active: !is_active || hovered }"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <WeaponsTabItem v-for="item in items" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import WeaponsTabItem from "./WeaponsTabItem.vue";

const props = defineProps({
  items: Object,
  category_icon: String,
  is_active: Boolean,
});

const headerIcon = ref(null);
const hovered = ref(false);

headerIcon.value = defineAsyncComponent(() =>
  import(`@/icons/weapons/${props.category_icon}.vue`)
);
</script>

<style scoped lang="scss">
.weapons__tab {
  position: relative;
  z-index: 1;
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  &__header {
    position: relative;
    z-index: 2;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    background: var(--bg-transparent);

    &__icon {
      flex: 0 0 auto;
      transform: rotate(270deg);
      height: 30px;
      fill: var(--weapon-icon);
    }
  }

  &__content {
    position: relative;
    transform: translateX(-100%);
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    justify-items: center;
    gap: 5px;
    width: 100%;
    padding: 5px;
    background: var(--bg-transparent);
    transition: 0.5s linear;

    &.active {
      transform: translateX(0);
    }
  }
}
</style>
