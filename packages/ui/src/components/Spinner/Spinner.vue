<template>
  <RootComponent component="span" :class="[$style['Spinner']]" role="status">
    <Component
      :is="SpinnerIcon[size]"
      :class="!disableAnimation && $style['Spinner--animation']"
    />
  </RootComponent>
</template>

<script setup lang="ts">
import {
  Icon16Spinner,
  Icon24Spinner,
  Icon32Spinner,
  Icon44Spinner,
} from "@musicraccoon/vk-icons-vue";
import RootComponent from "../RootComponent/RootComponent.vue";

withDefaults(
  defineProps<{
    size?: "small" | "regular" | "medium" | "large";
    disableAnimation?: boolean;
  }>(),
  {
    size: "regular",
  }
);

const SpinnerIcon = {
  small: Icon16Spinner,
  regular: Icon24Spinner,
  medium: Icon32Spinner,
  large: Icon44Spinner,
};
</script>

<style module scoped>
.Spinner {
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vkui--color_icon_medium);
}

@keyframes pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Spinner--animation {
  animation: spin 0.7s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .Spinner--animation {
    animation: pulse 1s alternate infinite;
  }
}

/**
 * CMP:
 * PanelHeader
 */
/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */
:global(.vkuiInternalPanelHeader) .Spinner {
  color: currentColor;
}
</style>
