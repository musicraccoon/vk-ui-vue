<template>
  <Clickable
    :class="[
      styles['Tappable'],
      sizeX !== Size.Regular && sizeXClassNames[sizeX],
      borderRadiusMode === 'inherit' && styles['Tappable--borderRadiusInherit'],
      hasPointerClassName(hasPointer),
    ]"
    :hover-class="hoverClass(hoverMode)"
    :active-class="activeClass(activeMode)"
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
import { Size } from "../../lib/adaptivity";
import { activeClass, DEFAULT_STATE_MODE, hoverClass } from "./state";
import styles from "./Tappable.module.css";

const props = withDefaults(defineProps<TappableProps>(), {
  borderRadiusMode: "auto",
  hoverMode: DEFAULT_STATE_MODE,
  activeMode: DEFAULT_STATE_MODE,
});
const attrs = useAttrs();

const sizeXClassNames = {
  none: styles["Tappable--sizeX-none"],
  compact: styles["Tappable--sizeX-compact"],
};

const isClickable = checkClickable({ ...props, ...attrs });
const adaptivity = useAdaptivity();
const sizeX = adaptivity.value.sizeX || "none";
const hasPointer = adaptivity.value.hasPointer;

const needRipple = useMaybeNeedRipple(props.activeMode, hasPointer);
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
