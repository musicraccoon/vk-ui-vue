export interface SpinnerProps {
  size?: "small" | "regular" | "medium" | "large";
  /**
   * Задать цвет можно будет через свойство color родителя
   */
  disableAnimation?: boolean;
  noColor?: boolean;
}
