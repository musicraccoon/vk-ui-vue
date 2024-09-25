<template>
  <RootComponent
    :class="[styles['Clickable__realClickable'], focusVisibleClassNames]"
    v-bind="{
      ...focusEvents,
      as: props.as,
    }"
  >
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { ClickableProps } from "./types";
import { useFocusVisible } from "../../composables/useFocusVisible";
import { useFocusVisibleClassName } from "../../composables/useFocusVisibleClassName";
import styles from "./Clickable.module.css";

// TODO: hasHover
// TODO: hovered
// TODO: activated
// TODO: hasActive
// TODO: hasHoverWithChildren
// TODO: unlockParentHover
// TODO: activeClassName
// TODO: hoverClassName

const props = withDefaults(defineProps<ClickableProps>(), {
  focusVisibleMode: "inside",
});

const { focusVisible, ...focusEvents } = useFocusVisible();
const focusVisibleClassNames = useFocusVisibleClassName({
  focusVisible,
  mode: props.focusVisibleMode,
});
</script>
