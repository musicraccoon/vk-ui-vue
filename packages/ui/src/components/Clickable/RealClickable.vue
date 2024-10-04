<template>
  <RootComponent
    :class="[
      styles['Clickable__realClickable'],
      focusVisibleClassNames,
      stateClass,
    ]"
    v-bind="{
      ...focusEvents,
      as: props.as,
      ...handlers,
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
import { useState } from "./useState";
import styles from "./Clickable.module.css";

// TODO: hasHover
// TODO: hovered
// TODO: activated
// TODO: hasActive
// TODO: hasHoverWithChildren
// TODO: unlockParentHover
// TODO: activeClass
// TODO: hoverClass

const props = withDefaults(defineProps<ClickableProps>(), {
  focusVisibleMode: "inside",
});

const { stateClass, ...handlers } = useState({
  activeClass: props.activeClass,
  hoverClass: props.hoverClass,
});

const { focusVisible, ...focusEvents } = useFocusVisible();
const focusVisibleClassNames = useFocusVisibleClassName({
  focusVisible,
  mode: props.focusVisibleMode,
});
</script>
