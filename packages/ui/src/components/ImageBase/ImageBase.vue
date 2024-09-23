<template>
  <div></div>
</template>

<script setup lang="ts">
import type { ImageBaseProps } from "./types";
import styles from "./ImageBase.module.css";

withDefaults(defineProps<ImageBaseProps>(), {
  objectFit: "cover",
});
</script>
