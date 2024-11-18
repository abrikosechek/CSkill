<template>
  <header class="header">
    <div class="header__main">
      <router-link class="header__main__logo" to="/">CSkill</router-link>
      <nav class="header__main__links">
        <router-link
          v-for="link in pages"
          :key="link.page"
          :to="link.page"
          class="header__main__links__item"
        >
          {{ link.text }}
        </router-link>
      </nav>
    </div>
    <a a="https://github.com/abrikosechek/CSkill" class="header__github">
      <IconGithubWhite />
    </a>
  </header>
</template>

<script setup>
import { IconGithubWhite } from "@/icons";

const pages = [
  {
    text: "Stats",
    page: "/weapon_statistics",
  },
];
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  margin: 8px 0;
  padding: 0 16px;
  background: var(--bg-transparent);
  border-radius: 8px;

  &__main {
    display: flex;
    align-items: center;
    gap: 12px;

    &__logo {
      font-size: 18px;
      line-height: 1em;
      font-weight: 500;
      color: white;
      text-decoration: none;
      opacity: 80;
    }

    &__links {
      display: flex;
      align-items: center;
      gap: 4px;

      &__item {
        color: white;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        opacity: 80;
        transition: 0.2s;

        &:hover {
          opacity: 90;
        }

        &.router-link-active {
          opacity: 100;
          cursor: default;
        }
      }
    }
  }

  &__github {
    width: 20px;
    height: 20px;

    & > * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
