<template>
  <RootComponent
    :class="[styles['Clickable__realClickable'], focusVisibleClassNames]"
    v-bind="{
      onFocus,
      onBlur,
    }"
  >
    <pre>{{ { focusVisible } }}</pre>
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { ClickableProps } from "./types";
import { useFocusVisible } from "../../composables/useFocusVisible";
import { useFocusVisibleClassName } from "../../composables/useFocusVisibleClassName";
import styles from "./Clickable.module.css";

const props = withDefaults(defineProps<ClickableProps>(), {
  focusVisibleMode: "inside",
});

const { focusVisible, onFocus, onBlur } = useFocusVisible();
const focusVisibleClassNames = useFocusVisibleClassName({
  focusVisible,
  mode: props.focusVisibleMode,
});
</script>
