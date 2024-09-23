import type { CSSProperties } from "vue";

export type SkeletonProps = {
  /**
   * Начальный цвет анимации
   */
  colorFrom?: string;

  /**
   * Финальный цвет анимации
   */
  colorTo?: string;

  /**
   * Выключает анимацию, в результате чего показывается только один цвет
   */
  noAnimation?: boolean;

  /**
   * Длительность анимации в секундах
   */
  duration?: number;
} & /** @vue-ignore */ Pick<
  CSSProperties,
  | "width"
  | "height"
  | "inlineSize"
  | "blockSize"
  | "maxWidth"
  | "maxInlineSize"
  | "borderRadius"
  | "margin"
>;
