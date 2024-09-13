<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, computed } from "vue";
import type { ConfigProvider } from "./types";
import { configInjectionKey, useConfig } from "../../composables/useConfig";
import { DEFAULT_TOKENS_CLASS_NAMES } from "../../lib/tokens";

export interface ConfigProviderProps extends Partial<ConfigProvider> {}

const props = withDefaults(defineProps<ConfigProviderProps>(), {
  hasCustomPanelHeaderAfter: false,
  customPanelHeaderAfterMinWidth: 90,
  isWebView: false,
  transitionMotionEnabled: true,
  // TODO. Добавить автоопределение платформы по User Agent
  platform: "android",
  appearance: undefined,
  // TODO. Из-за withDefaults появляется ошибка TS.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  tokensClassNames: DEFAULT_TOKENS_CLASS_NAMES,
  locale: "ru",
});

const parentConfig = useConfig();

const config = computed<ConfigProvider>(() => {
  return { ...parentConfig?.value, ...props };
});

provide(configInjectionKey, config);
</script>

<style scoped></style>
