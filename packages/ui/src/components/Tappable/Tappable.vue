<template>
  <Clickable
    :class="[
      styles['Tappable'],
      sizeX !== Size.Regular && sizeXClassNames[sizeX],
      borderRadiusMode === 'inherit' && styles['Tappable--borderRadiusInherit'],
      hasPointerClassName(hasPointer),
    ]"
    v-bind="{
      ...typeProps,
      ...rippleEvents,
      as: $props.as,
      hidden: $props.hidden,
    }"
  >
    <slot />
    <Ripple v-if="isClickable" v-bind="{ needRipple, clicks }" />
  </Clickable>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import Clickable from "../Clickable/Clickable.vue";
import type { TappableProps } from "./types";
import { checkClickable } from "../Clickable/utils";
import { useAdaptivity } from "../../composables/useAdaptivity";
import { useMaybeNeedRipple } from "./useMaybeNeedRipple";
import { useRipple } from "./useRipple";
import Ripple from "./Ripple.vue";
import styles from "./Tappable.module.css";
import { Size } from "../../lib/adaptivity";

// TODO: Добавить activeMode и hoverMode

const props = withDefaults(defineProps<TappableProps>(), {
  borderRadiusMode: "auto",
  hoverMode: "background",
  activeMode: "background",
});
const attrs = useAttrs();

const sizeXClassNames = {
  none: styles["Tappable--sizeX-none"],
  compact: styles["Tappable--sizeX-compact"],
};

const isClickable = checkClickable({ ...props, ...attrs });
const { sizeX = "none", hasPointer } = useAdaptivity().value;

// TODO: 'background' заменить на activeMode
const needRipple = useMaybeNeedRipple("background", hasPointer);
const { clicks, ...rippleEvents } = useRipple(needRipple, hasPointer);

const typeProps = props.as === "button" ? { type: "button" } : {};

const hasPointerClassName = (hasPointer?: boolean) => {
  switch (hasPointer) {
    case undefined:
      return styles["Tappable--hasPointer-none"];
    case false:
      return styles["Tappable--hasPointer-false"];
  }

  return undefined;
};
</script>
