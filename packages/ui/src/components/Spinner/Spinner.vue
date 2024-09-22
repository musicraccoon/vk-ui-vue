<template>
  <RootComponent
    as="span"
    :class="[styles['Spinner'], noColor && styles['Spinner--no-color']]"
    role="status"
  >
    <Component
      :is="SpinnerIcon[size]"
      :class="!disableAnimation && styles['Spinner--animation']"
    />
    <VisuallyHidden>
      <slot> Загрузка... </slot>
    </VisuallyHidden>
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
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden.vue";
import type { SpinnerProps } from "./types";
import styles from "./Spinner.module.css";

withDefaults(defineProps<SpinnerProps>(), {
  size: "regular",
});

const SpinnerIcon = {
  small: Icon16Spinner,
  regular: Icon24Spinner,
  medium: Icon32Spinner,
  large: Icon44Spinner,
};
</script>
