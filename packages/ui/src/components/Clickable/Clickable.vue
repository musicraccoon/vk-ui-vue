<template>
  <RealClickable
    v-if="isClickable"
    :class="baseClassName"
    v-bind="{ ...commonProps, ...props }"
  >
    1
    <slot />
  </RealClickable>
  <NonClickable
    v-else
    :class="baseClassName"
    v-bind="{ ...commonProps, ...props }"
  >
    2
    <slot />
  </NonClickable>
</template>

<script setup lang="ts">
import RealClickable from "./RealClickable.vue";
import NonClickable from "./NonClickable.vue";
import type { ClickableProps } from "./types";
import type { RootComponentProps } from "../RootComponent/types";
import styles from "./Clickable.module.css";

defineEmits<{
  (e: "onClick", value: MouseEvent): void;
}>();

const component = (props: RootComponentProps) => {
  if (props.as !== undefined) {
    return { as: props.as };
  } else if (props.href !== undefined) {
    return { as: "a", "aria-disabled": props.disabled };
  } else if (props.onClick == undefined) {
    return {
      as: "div",
      role: "button",
      tabIndex: props.disabled ? undefined : 0,
      "aria-disabled": props.disabled,
    };
  }

  return {};
};
const checkClickable = (props: ClickableProps): boolean => {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.onClickCapture !== undefined ||
      props.as === "a" ||
      props.as === "button" ||
      props.as === "label" ||
      props.as === "input") &&
    !props.disabled
  );
};

const props = withDefaults(defineProps<ClickableProps>(), {
  focusVisibleMode: "inside",
});

console.log(props);

const commonProps: RootComponentProps = component(props);
const isClickable = checkClickable(props);

const baseClassName = [props.class, styles["Clickable__host"]];
</script>
