<template>
  <div></div>
</template>

<script setup lang="ts">
import type { ImageProps } from "./types";
import styles from "./Image.module.css";

withDefaults(defineProps<ImageProps>(), {
  size: 48,
  borderRadius: "m",
});
</script>
