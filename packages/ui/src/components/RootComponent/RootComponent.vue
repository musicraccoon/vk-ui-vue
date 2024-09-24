<template>
  <Component
    :is="as"
    :class="[
      styles['RootComponent'],
      hidden && styles['RootComponent--hidden'],
    ]"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { RootComponentProps } from "./types";
import styles from "./RootComponent.module.css";

withDefaults(defineProps<RootComponentProps>(), {
  as: "div",
});
</script>
