export interface OffsetRectInterface {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
}

export const getOffsetRect = (el: HTMLElement | null): OffsetRectInterface => {
  const box = el?.getBoundingClientRect();

  return {
    top: box?.top,
    left: box?.left,
    width: el?.offsetWidth,
    height: el?.offsetHeight,
  };
};
