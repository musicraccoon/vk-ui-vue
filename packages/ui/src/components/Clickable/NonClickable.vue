<template>
  <RootComponent :as="$props.as" :hidden="$props.hidden">
    <slot />
  </RootComponent>
</template>

<script setup lang="ts">
import RootComponent from "../RootComponent/RootComponent.vue";
import type { ClickableProps } from "./types";

defineProps<ClickableProps>();
</script>
