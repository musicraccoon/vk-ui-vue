import type { ClickableProps } from "./types";

export const checkClickable = (props: ClickableProps): boolean => {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.as === "a" ||
      props.as === "button" ||
      props.as === "label" ||
      props.as === "input") &&
    !props.disabled
  );
};
