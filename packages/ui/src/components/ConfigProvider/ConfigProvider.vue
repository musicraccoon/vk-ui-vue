<template>
  <slot />
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import type { ConfigProvider } from "./types";
import { UseConfigProviderSymbol } from "./useConfigProvider";

const props = withDefaults(defineProps<ConfigProvider>(), {
  hasCustomPanelHeaderAfter: false,
  customPanelHeaderAfterMinWidth: 90,
  isWebView: false,
  transitionMotionEnabled: true,
  platform: "",
  appearance: undefined,
  tokensClassNames: "",
  locale: "ru",
});

const configContext = ref(props);

provide(UseConfigProviderSymbol, configContext);
</script>

<style scoped></style>
