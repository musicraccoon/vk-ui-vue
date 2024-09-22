export type SpacingSize =
  | "s"
  | "m"
  | "l"
  | "3xs"
  | "2xs"
  | "xs"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export interface SpacingProps {
  /**
   * Высота спэйсинга
   */
  size?: number | SpacingSize;
}
