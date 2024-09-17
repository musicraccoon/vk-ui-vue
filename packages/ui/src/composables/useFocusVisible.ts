import { shallowRef, type Events } from "vue";
import { useAppRoot } from "./useAppRoot";

export const useFocusVisible = (
  withKeyboardInputCheck = true
): {
  focusVisible: boolean;
  onFocus: (event: Events["onFocus"]) => void;
  onBlur: (event: Events["onBlur"]) => void;
} => {
  const isFocused = shallowRef(false);

  const appRoot = useAppRoot();

  const onFocus = (e: Events["onFocus"]) => {
    e.stopPropagation();
    isFocused.value = true;
  };

  const onBlur = (e: Events["onBlur"]) => {
    e.stopPropagation();
    isFocused.value = false;
  };

  const focusVisible = withKeyboardInputCheck
    ? appRoot?.keyboardInput.value && isFocused
    : isFocused;

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
};
