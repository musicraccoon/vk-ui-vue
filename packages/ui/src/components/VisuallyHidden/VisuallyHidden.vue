<template>
  <RootComponent
    :as="as"
    :class="[
      styles['VisuallyHidden'],
      as === 'input' && styles['VisuallyHidden--focusable-input'],
    ]"
  >
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { VisuallyHiddenProps } from "./types";
import styles from "./VisuallyHidden.module.css";

withDefaults(defineProps<VisuallyHiddenProps>(), {
  as: "span",
});
</script>
