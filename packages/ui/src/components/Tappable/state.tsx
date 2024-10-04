import type { StateMode, StateModeLiteral } from "./types";
import styles from "./Tappable.module.css";

/**
 * Состояние по умолчанию
 */
export const DEFAULT_STATE_MODE: StateMode = "background";

const stylesHovered: Record<string, string> = {
  background: styles["Tappable--hovered-background"],
  opacity: styles["Tappable--hovered-opacity"],
  none: "",
};

/**
 * Определяем класс наведения
 */
export function hoverClass(
  hoverMode: StateModeLiteral = DEFAULT_STATE_MODE
): string {
  const presetClass = stylesHovered[hoverMode] as string | undefined;

  return presetClass !== undefined ? presetClass : hoverMode;
}

const stylesActivated: Record<string, string> = {
  background: styles["Tappable--activated-background"],
  opacity: styles["Tappable--activated-opacity"],
  none: "",
};

/**
 * Определяем класс наведения
 */
export function activeClass(
  activeMode: StateModeLiteral = DEFAULT_STATE_MODE
): string {
  const presetClass = stylesActivated[activeMode] as string | undefined;

  return presetClass !== undefined ? presetClass : activeMode;
}
