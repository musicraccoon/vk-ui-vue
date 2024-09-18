<template>
  <RootComponent :class="$style['Div']">
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { DivProps } from "./types";

defineProps<DivProps>();
</script>

<style src="./Div.module.css" module scoped></style>
