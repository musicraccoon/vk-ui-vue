<template>
  <RootComponent
    :component="component"
    :class="[
      $style['VisuallyHidden'],
      component === 'input' && $style['VisuallyHidden--focusable-input'],
    ]"
  >
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";

withDefaults(
  defineProps<{
    component?: string;
  }>(),
  {
    component: "span",
  }
);
</script>

<style src="./VisuallyHidden.module.css" module scoped></style>
