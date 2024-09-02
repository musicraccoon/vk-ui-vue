<template>
  <Component
    :is="component"
    :class="[
      $style['RootComponent'],
      hidden && $style['RootComponent--hidden'],
    ]"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    component?: string;
    hidden?: boolean;
  }>(),
  {
    component: "div",
  }
);
</script>

<style module scoped>
.RootComponent[hidden="hidden"],
.RootComponent--hidden {
  /* stylelint-disable-next-line declaration-no-important */
  display: none !important;
}

.RootComponent[hidden="until-found"] {
  /* stylelint-disable-next-line declaration-no-important */
  content-visibility: hidden !important;
}
</style>
