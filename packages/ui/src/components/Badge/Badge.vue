<template>
  <RootComponent
    as="span"
    :class="[styles['Badge'], 'vkuiInternalBadge', stylesMode[mode]]"
  >
    <VisuallyHidden v-if="$slots.default">
      <slot />
    </VisuallyHidden>
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden.vue";
import type { BadgeProps } from "./types";
import styles from "./Badge.module.css";

withDefaults(defineProps<BadgeProps>(), {
  mode: "new",
});

const stylesMode = {
  new: styles["Badge--mode-new"],
  prominent: styles["Badge--mode-prominent"],
};
</script>
