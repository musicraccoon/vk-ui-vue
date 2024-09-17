<template>
  <ConfigProvider :appearance="value">
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import ConfigProvider from "../ConfigProvider/ConfigProvider.vue";
import { AppearanceProviderProps } from "./types";

defineProps<AppearanceProviderProps>();
</script>

<style scoped></style>
