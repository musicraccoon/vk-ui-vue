<template>
  <RootComponent
    :as="as"
    :class="[
      $style['VisuallyHidden'],
      as === 'input' && $style['VisuallyHidden--focusable-input'],
    ]"
  >
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { VisuallyHiddenProps } from "./types";

withDefaults(defineProps<VisuallyHiddenProps>(), {
  as: "span",
});
</script>

<style src="./VisuallyHidden.module.css" module scoped></style>
