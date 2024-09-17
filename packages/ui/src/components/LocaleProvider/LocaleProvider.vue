<template>
  <ConfigProvider :locale="value">
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import ConfigProvider from "../ConfigProvider/ConfigProvider.vue";
import { LocaleProviderProps } from "./types";

defineProps<LocaleProviderProps>();
</script>

<style scoped></style>
