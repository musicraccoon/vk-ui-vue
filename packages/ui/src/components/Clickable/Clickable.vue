<template>
  <Component
    :is="isClickable ? RealClickable : NonClickable"
    v-bind="{
      ...commonProps,
      class: baseClassName,
      as: $props.as,
      hidden: $props.hidden,
    }"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import RealClickable from "./RealClickable.vue";
import NonClickable from "./NonClickable.vue";
import { checkClickable } from "./utils";
import type { ClickableProps } from "./types";
import type { RootComponentProps } from "../RootComponent/types";
import styles from "./Clickable.module.css";

const component = (
  props: RootComponentProps,
  attrs: Record<string, unknown>
) => {
  if (props.as !== undefined) {
    return { as: props.as };
  } else if (props.href !== undefined) {
    return { as: "a", "aria-disabled": props.disabled };
  } else if (attrs.onClick !== undefined) {
    return {
      as: "div",
      role: "button",
      tabIndex: props.disabled ? undefined : 0,
      "aria-disabled": props.disabled,
    };
  }

  return {};
};

const props = withDefaults(defineProps<ClickableProps>(), {
  focusVisibleMode: "inside",
});
const attrs = useAttrs();

const commonProps: RootComponentProps = component(props, attrs);
const isClickable = checkClickable({ ...props, ...attrs });

const baseClassName = [props.class, styles["Clickable__host"]];
</script>
