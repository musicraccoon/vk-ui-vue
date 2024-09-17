<template>
  <ConfigProvider :platform="value">
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import ConfigProvider from "../ConfigProvider/ConfigProvider.vue";
import { PlatformProviderProps } from "./types";

defineProps<PlatformProviderProps>();
</script>

<style scoped></style>
