<template>
  <RealClickable v-if="isClickable">
    <slot />
  </RealClickable>
  <NonClickable v-else>
    <slot />
  </NonClickable>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
import RealClickable from "./RealClickable.vue";
import NonClickable from "./NonClickable.vue";

const $style = useCssModule();

const isClickable = false;

const baseClassName = [$style["Clickable__host"]];
</script>

<style src="./Clickable.module.css" module scoped></style>
