import { computed, shallowRef, type Events } from "vue";
import type { StateProps } from "./types";

export const DEFAULT_ACTIVE_EFFECT_DELAY = 600;

const ACTIVE_DELAY = 70;

interface UseHoverProps extends Pick<StateProps, "hovered" | "hasHover"> {
  /**
   * Блокирование активации состояний
   */
  lockState: boolean;
  setParentStateLock: (v: boolean) => void;
}

const useHover = (options: UseHoverProps) => {
  const hoveredStateLocal = shallowRef(false);

  const handleHover = (isHover: boolean) => {
    hoveredStateLocal.value = isHover;
  };

  const onPointerEnter = (e: Events["onPointerenter"]) => {
    console.log("onPointerEnter");

    if (e.pointerType !== "touch") {
      handleHover(true);
    }
  };
  const onPointerLeave = () => {
    console.log("onPointerLeave");
    handleHover(false);
  };

  const isHovered = computed(() => {
    return calculateStateValue({
      hasState: options.hasHover ?? true,
      isLocked: options.lockState,
      stateValueControlled: Boolean(options.hovered),
      stateValueLocal: hoveredStateLocal.value,
    });
  });

  return {
    isHovered,
    onPointerenter: onPointerEnter,
    onPointerleave: onPointerLeave,
  };
};

export const useState = (options: StateProps) => {
  const { isHovered, ...hoverEvents } = useHover({
    hasHover: options.hasHover,
    hovered: options.hovered,
    lockState: false,
    setParentStateLock: () => {},
  });
  const isActivated = false;

  const stateClass = computed(() => [
    isHovered.value && options.hoverClass,
    isActivated && options.activeClass,
  ]);

  return {
    stateClass,
    ...hoverEvents,
  };
};

// Общая функция для определения конечного состояния active/hovered
const calculateStateValue = ({
  hasState,
  isLocked,
  stateValueControlled,
  stateValueLocal,
}: {
  hasState: boolean;
  isLocked: boolean;
  stateValueControlled: boolean;
  stateValueLocal: boolean;
}): boolean => {
  return hasState && !isLocked && (stateValueControlled || stateValueLocal);
};
