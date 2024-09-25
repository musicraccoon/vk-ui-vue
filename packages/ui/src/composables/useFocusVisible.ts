import { computed, shallowRef } from "vue";
import type { ComputedRef, Events } from "vue";
import { useAppRoot } from "./useAppRoot";

export const useFocusVisible = (
  withKeyboardInputCheck = true
): {
  focusVisible: ComputedRef<boolean>;
  onFocus: (e: Events["onFocus"]) => void;
  onBlur: (e: Events["onBlur"]) => void;
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

  const focusVisible = computed(() => {
    return withKeyboardInputCheck
      ? appRoot!.keyboardInput.value && isFocused.value
      : isFocused.value;
  });

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
};
