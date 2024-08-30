<template>
  <div
    :class="[
      $style['Button'],
      stylesSize[size],
      stylesMode[mode],
      stylesAppearance[appearance],
    ]"
  >
    button
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";

withDefaults(
  defineProps<{
    size?: "s" | "m" | "l";
    mode?: "primary" | "secondary" | "tertiary" | "outline" | "link";
    appearance?:
      | "accent"
      | "positive"
      | "negative"
      | "neutral"
      | "overlay"
      | "accent-invariable";
  }>(),
  {
    size: "s",
    mode: "primary",
    appearance: "accent",
  }
);

const $style = useCssModule();

const stylesSize = {
  s: $style["Button--size-s"],
  m: $style["Button--size-m"],
  l: $style["Button--size-l"],
};

const stylesMode = {
  primary: $style["Button--mode-primary"],
  secondary: $style["Button--mode-secondary"],
  tertiary: $style["Button--mode-tertiary"],
  outline: $style["Button--mode-outline"],
  link: $style["Button--mode-link"],
};

const stylesAppearance = {
  accent: $style["Button--appearance-accent"],
  positive: $style["Button--appearance-positive"],
  negative: $style["Button--appearance-negative"],
  neutral: $style["Button--appearance-neutral"],
  overlay: $style["Button--appearance-overlay"],
  "accent-invariable": $style["Button--appearance-accent-invariable"],
};

const stylesAlign = {
  left: $style["Button--align-left"],
  center: $style["Button--align-center"],
  right: $style["Button--align-right"],
};

const sizeYClassNames = {
  none: $style["Button--sizeY-none"],
  regular: $style["Button--sizeY-regular"],
};
</script>

<style src="./Button.module.css" module></style>
