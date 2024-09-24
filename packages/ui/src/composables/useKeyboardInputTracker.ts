import { shallowRef, watchEffect, type Events } from "vue";
import { isKeyboardFocusingStarted } from "../lib/accessibility";

export const ENABLE_KEYBOARD_INPUT_EVENT_NAME = "enableKeyboardInput";
export const DISABLE_KEYBOARD_INPUT_EVENT_NAME = "disableKeyboardInput";

const EVENT_OPTIONS = {
  passive: true,
  capture: true,
};

export const useKeyboardInputTracker = () => {
  const keyboardFocusingStarted = shallowRef(false);

  watchEffect((onCleanup) => {
    const handleKeydown = (e: Events["onKeydown"]) => {
      if (isKeyboardFocusingStarted(e)) {
        keyboardFocusingStarted.value = true;
      }
    };

    const handleCustomEnableKeyboardEvent = () => {
      keyboardFocusingStarted.value = true;
    };

    const handleCustomDisableKeyboardEvent = () => {
      keyboardFocusingStarted.value = false;
    };

    document.addEventListener("keydown", handleKeydown, EVENT_OPTIONS);
    document.addEventListener(
      ENABLE_KEYBOARD_INPUT_EVENT_NAME,
      handleCustomEnableKeyboardEvent,
      EVENT_OPTIONS
    );
    document.addEventListener(
      DISABLE_KEYBOARD_INPUT_EVENT_NAME,
      handleCustomDisableKeyboardEvent,
      EVENT_OPTIONS
    );
    document.addEventListener(
      "mousedown",
      handleCustomDisableKeyboardEvent,
      EVENT_OPTIONS
    );
    document.addEventListener(
      "touchstart",
      handleCustomDisableKeyboardEvent,
      EVENT_OPTIONS
    );

    onCleanup(() => {
      document.removeEventListener("keydown", handleKeydown, EVENT_OPTIONS);
      document.removeEventListener(
        ENABLE_KEYBOARD_INPUT_EVENT_NAME,
        handleCustomEnableKeyboardEvent,
        EVENT_OPTIONS
      );
      document.removeEventListener(
        DISABLE_KEYBOARD_INPUT_EVENT_NAME,
        handleCustomDisableKeyboardEvent,
        EVENT_OPTIONS
      );
      document.removeEventListener(
        "mousedown",
        handleCustomDisableKeyboardEvent,
        EVENT_OPTIONS
      );
      document.removeEventListener(
        "touchstart",
        handleCustomDisableKeyboardEvent,
        EVENT_OPTIONS
      );
    });
  });

  return keyboardFocusingStarted;
};
