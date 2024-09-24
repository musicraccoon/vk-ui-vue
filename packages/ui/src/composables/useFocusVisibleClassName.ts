import { computed, toValue, type MaybeRef } from "vue";
import styles from "../styles/focusVisible.module.css";
import type { LiteralUnion } from "../types";

export const focusVisiblePresetModeClassNames: Record<
  "inside" | "outside",
  string
> = {
  inside: styles["-focus-visible--mode-inside"],
  outside: styles["-focus-visible--mode-outside"],
};

type FocusVisiblePresetMode = keyof typeof focusVisiblePresetModeClassNames;

export type FocusVisibleMode = LiteralUnion<FocusVisiblePresetMode, string>;

export interface FocusVisibleModeProps {
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible
   */
  focusVisibleMode?: FocusVisibleMode;
}

const isPresetMode = (mode: FocusVisibleMode): mode is FocusVisiblePresetMode =>
  mode === "inside" || mode === "outside";

export interface UseFocusVisibleClassNameProps {
  focusVisible?: MaybeRef<boolean>;
  mode?: FocusVisibleMode;
}

/**
 * Используется для проброса классов состояния :focus-visible в компонент.
 *
 * Рулит исключительно классами. Чтобы определить, есть ли фокусное состояние,
 * используйте хуки `useFocusVisible()` и `useFocusWithin()`.
 */
export const useFocusVisibleClassName = ({
  focusVisible = false,
  mode = "inside",
}: UseFocusVisibleClassNameProps) => {
  const modeClassName = isPresetMode(mode)
    ? focusVisiblePresetModeClassNames[mode]
    : mode;

  const focusVisibleClassNames = computed(() => {
    return [
      styles["-focus-visible"],
      toValue(focusVisible) && styles["-focus-visible--focused"],
      toValue(focusVisible) && modeClassName,
    ];
  });

  return focusVisibleClassNames;
};
