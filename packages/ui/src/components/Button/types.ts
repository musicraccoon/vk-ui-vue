export interface ButtonProps {
  /**
   * @default primary
   */
  mode?: "primary" | "secondary" | "tertiary" | "outline" | "link";
  /**
   * @default accent
   */
  appearance?:
    | "accent"
    | "positive"
    | "negative"
    | "neutral"
    | "overlay"
    | "accent-invariable";
  /**
   * @default s
   */
  size?: "s" | "m" | "l";
  stretched?: boolean;
  before?: undefined;
  after?: undefined;
  loading?: boolean;
  disableSpinnerAnimation?: boolean;
  rounded?: boolean;
}
