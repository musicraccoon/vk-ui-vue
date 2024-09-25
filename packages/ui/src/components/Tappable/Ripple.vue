<template>
  <span
    :class="[
      styles['Tappable__stateLayer'],
      needRipple && styles['Tappable__ripple'],
    ]"
    aria-hidden
  >
    <span
      v-for="wave in clicks"
      :key="wave.id"
      :class="styles['Tappable__wave']"
      :style="{
        top: wave.y + 'px',
        left: wave.x + 'px',
      }"
    ></span>
  </span>
</template>

<script setup lang="ts">
import styles from "./Tappable.module.css";
import type { RippleProps } from "./types";

defineProps<RippleProps>();
</script>
