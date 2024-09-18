<template>
  <RootComponent
    as="span"
    :class="[$style['Badge'], 'vkuiInternalBadge', stylesMode[mode]]"
  >
    <VisuallyHidden v-if="$slots.default">
      <slot />
    </VisuallyHidden>
  </RootComponent>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
import RootComponent from "../RootComponent/RootComponent.vue";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden.vue";
import type { BadgeProps } from "./types";

withDefaults(defineProps<BadgeProps>(), {
  mode: "new",
});

const $style = useCssModule();

const stylesMode = {
  new: $style["Badge--mode-new"],
  prominent: $style["Badge--mode-prominent"],
};
</script>

<style src="./Badge.module.css" module scoped></style>
