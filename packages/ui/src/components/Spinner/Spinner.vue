<template>
  <RootComponent
    component="span"
    :class="[$style['Spinner'], noColor && $style['Spinner--no-color']]"
    role="status"
  >
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
import { SpinnerProps, SpinnerSize } from "./types";

withDefaults(defineProps<SpinnerProps>(), {
  size: SpinnerSize.Regular,
});

const SpinnerIcon = {
  small: Icon16Spinner,
  regular: Icon24Spinner,
  medium: Icon32Spinner,
  large: Icon44Spinner,
};
</script>

<style src="./Spinner.module.css" module scoped></style>
