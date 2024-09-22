<template>
  <RootComponent :class="styles['Div']">
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { DivProps } from "./types";
import styles from "./Div.module.css";

defineProps<DivProps>();
</script>
