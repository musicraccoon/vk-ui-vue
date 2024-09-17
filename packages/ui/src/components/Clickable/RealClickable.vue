<template>
  <RootComponent :class="[$style['Clickable__realClickable']]"></RootComponent>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
import RootComponent from "../RootComponent/RootComponent.vue";
import type { ClickableProps } from "./types";

const $style = useCssModule();

defineProps<ClickableProps>();

const { focusVisible, ...focusEvents } = useFocusVisible();
// const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: focusVisibleMode });
</script>

<style src="./Clickable.module.css" module scoped></style>
