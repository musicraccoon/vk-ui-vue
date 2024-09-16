<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, computed } from "vue";
import type { ConfigProvider } from "./types";
import { configInjectionKey, useConfig } from "../../composables/useConfig";
import { DEFAULT_TOKENS_CLASS_NAMES } from "../../lib/tokens";
import { Platform } from "../../lib/platform";
import { excludeKeysWithUndefined } from "../../lib/utils";

export interface ConfigProviderProps extends Partial<ConfigProvider> {}

const props = defineProps<ConfigProviderProps>();
const clearProps = computed(() => excludeKeysWithUndefined(props));

const defaultProps: ConfigProviderProps = {
  hasCustomPanelHeaderAfter: false,
  customPanelHeaderAfterMinWidth: 90,
  isWebView: false,
  transitionMotionEnabled: true,
  platform: Platform.Android,
  appearance: undefined,
  tokensClassNames: DEFAULT_TOKENS_CLASS_NAMES,
  locale: "ru",
};
const parentConfig = useConfig();

const config = computed(() => {
  return {
    ...defaultProps,
    ...parentConfig?.value,
    ...clearProps.value,
  } as ConfigProvider;
});

provide(configInjectionKey, config);
</script>

<style scoped></style>
