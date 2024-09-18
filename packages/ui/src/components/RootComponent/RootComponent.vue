<template>
  <Component
    :is="as"
    :class="[
      $style['RootComponent'],
      hidden && $style['RootComponent--hidden'],
    ]"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { RootComponentProps } from "./types";

withDefaults(defineProps<RootComponentProps>(), {
  as: "div",
});
</script>

<style src="./RootComponent.module.css" module scoped></style>
