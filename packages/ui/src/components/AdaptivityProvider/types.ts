import type { Size, ViewWidth, ViewHeight } from "../../lib/adaptivity";

export interface SizeProps {
  sizeX?: Size;
  sizeY?: Size;
}

export interface AdaptivityProps extends SizeProps {
  viewWidth?: ViewWidth;
  viewHeight?: ViewHeight;
  hasPointer?: boolean;
  hasHover?: boolean;
}
