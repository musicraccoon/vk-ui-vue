<template>
  <RootComponent
    :class="[
      styles['Spacing'],
      typeof size === 'string' && sizesClassNames[size],
    ]"
    :style="{
      ...(typeof size === 'number' && {
        [CUSTOM_CSS_TOKEN_FOR_USER_GAP]: size,
      }),
    }"
  ></RootComponent>
</template>

<script setup lang="ts">
import type { SpacingProps, SpacingSize } from "./types";
import RootComponent from "../RootComponent/RootComponent.vue";
import styles from "./Spacing.module.css";

withDefaults(defineProps<SpacingProps>(), {
  size: "m",
});

const CUSTOM_CSS_TOKEN_FOR_USER_GAP = "--vkui_internal--Spacing_gap";

const sizesClassNames: Record<SpacingSize, string> = {
  "3xs": styles["Spacing--3xs"],
  "2xs": styles["Spacing--2xs"],
  xs: styles["Spacing--xs"],
  s: styles["Spacing--s"],
  m: styles["Spacing--m"],
  l: styles["Spacing--l"],
  xl: styles["Spacing--xl"],
  "2xl": styles["Spacing--2xl"],
  "3xl": styles["Spacing--3xl"],
  "4xl": styles["Spacing--4xl"],
};
</script>
