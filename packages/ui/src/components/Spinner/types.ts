export enum SpinnerSize {
  Small = "small",
  Regular = "regular",
  Medium = "medium",
  Large = "large",
}

export interface SpinnerProps {
  /**
   * @default regular
   */
  size?: SpinnerSize;
  disableAnimation?: boolean;
  noColor?: boolean;
}
