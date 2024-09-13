<template>
  <slot />
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { adaptivityInjectionKey } from "../../composables/useAdaptivity";
import {
  Size,
  getSizeX,
  isCompactByViewWidth,
  isCompactByViewHeight,
} from "../../lib/adaptivity";
import { AdaptivityProps } from "./types";

const props = defineProps<AdaptivityProps>();

const adaptivity = computed<AdaptivityProps>(() => {
  const nextProps = {
    viewWidth: props.viewWidth,
    viewHeight: props.viewHeight,
    sizeX: props.sizeX,
    sizeY: props.sizeY,
    hasPointer: props.hasPointer,
    hasHover: props.hasHover,
  };

  if (props.sizeX === undefined && props.viewWidth !== undefined) {
    nextProps.sizeX = getSizeX(props.viewWidth);
  }

  if (props.sizeY === undefined) {
    if (
      isCompactByViewWidth(props.viewWidth, props.hasPointer) ||
      isCompactByViewHeight(props.viewHeight)
    ) {
      nextProps.sizeY = Size.Compact;
    } else if (
      props.viewWidth !== undefined ||
      props.viewHeight !== undefined
    ) {
      nextProps.sizeY = Size.Regular;
    }
  }

  return nextProps;
});

provide(adaptivityInjectionKey, adaptivity);
</script>

<style scoped></style>
