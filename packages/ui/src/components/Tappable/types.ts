import { ClickableProps } from "../Clickable/types";

export interface TappableProps extends ClickableProps {
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
