import { ref } from "vue";
import { isKeyboardFocusingStarted } from "../lib/accessibility";

export const useKeyboardInputTracker = () => {
  const keyboardFocusingStartedRef = ref(false);

  const handleKeydown = (e: KeyboardEvent) => {
    if (isKeyboardFocusingStarted(e)) {
      keyboardFocusingStartedRef.value = true;
    }
  };

  const handleCustomEnableKeyboardEvent = () => {
    keyboardFocusingStartedRef.value = true;
  };

  const handleCustomDisableKeyboardEvent = () => {
    keyboardFocusingStartedRef.value = false;
  };
};
