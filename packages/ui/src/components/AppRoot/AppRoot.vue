<template>
  <div :class="$style['AppRoot']">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {
  AppRootLayout,
  AppRootMode,
  AppRootScroll,
  AppRootUserSelectMode,
  SafeAreaInsets,
} from "./types";

const props = withDefaults(
  defineProps<{
    mode?: AppRootMode;
    scroll?: AppRootScroll;
    safeAreaInsets?: SafeAreaInsets;
    portalRoot?: HTMLElement;
    disableParentTransformForPositionFixedElements?: boolean;
    layout?: AppRootLayout;
    userSelectMode?: AppRootUserSelectMode;
  }>(),
  {
    mode: "full",
    scroll: "global",
    safeAreaInsets: undefined,
    portalRoot: undefined,
    layout: undefined,
    userSelectMode: undefined,
  }
);

/* const { isWebView } = useConfigProvider();
const userSelectModeClassName = getUserSelectModeClassName({
  userSelectMode: props.userSelectMode,
  isWebView,
  hasPointer,
}); */
</script>

<style src="./AppRoot.module.css" module></style>
