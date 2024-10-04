import { ClickableProps } from "../Clickable/types";

export interface TappableProps extends ClickableProps, StateProps {
  /**
   * Задает border-radius элементу
   * В режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`
   */
  borderRadiusMode?: "auto" | "inherit";
}

export interface Wave {
  x: number;
  y: number;
  id: number;
  pointerId: number;
}

export interface RippleProps {
  needRipple: boolean;
  clicks: Wave[];
}

export type StateMode = "opacity" | "background" | "none";

export interface StateProps {
  /**
   * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
   */
  activeMode?: StateMode;

  /**
   * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
   */
  hoverMode?: StateMode;
}
