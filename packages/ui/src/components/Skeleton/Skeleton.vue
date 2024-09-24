<template>
  <RootComponent
    ref="rootRef"
    as="span"
    :class="[
      styles['Skeleton'],
      !isAnimationStarted && styles['Skeleton--disableAnimation'],
    ]"
    :style="{ ...skeletonStyle }"
  >
    <slot> &zwnj; </slot>
  </RootComponent>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from "vue";
import RootComponent from "../RootComponent/RootComponent.vue";
import type { SkeletonProps } from "./types";
import { useSkeletonSyncAnimation, useSkeletonPosition } from "./utils";
import styles from "./Skeleton.module.css";

const CUSTOM_PROPERTY_GRADIENT_LEFT = "--vkui_internal--skeleton_gradient_left";

const props = defineProps<SkeletonProps>();

const noAnimation = computed(() => props.noAnimation);
const rootRef = ref<InstanceType<typeof RootComponent>>();
const isAnimationStarted = useSkeletonSyncAnimation(
  noAnimation,
  props.duration
);
const skeletonGradientLeft = useSkeletonPosition(rootRef);

const skeletonStyle = computed<CSSProperties>(() => {
  return {
    width: props.width,
    height: props.height,
    inlineSize: props.inlineSize,
    blockSize: props.blockSize,
    maxWidth: props.maxWidth,
    maxInlineSize: props.maxInlineSize,
    borderRadius: props.borderRadius,
    margin: props.margin,
    [CUSTOM_PROPERTY_GRADIENT_LEFT]: skeletonGradientLeft.value,
    "--vkui_internal--skeleton_color_from": props.colorFrom,
    "--vkui_internal--skeleton_color_to": props.colorTo,
    "--vkui_internal--skeleton_animation_duration": Number.isFinite(
      props.duration
    )
      ? `${props.duration}s`
      : undefined,
  };
});
</script>
