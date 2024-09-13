import { Size } from "./constants";

export type CSSBreakpoints =
  | "desktopPlus"
  | "tabletPlus"
  | "tablet"
  | "tabletMinus"
  | "smallTabletPlus"
  | "smallTablet"
  | "smallTabletMinus"
  | "mobilePlus"
  | "mobile"
  | "smallMobileMinus";

export type CSSBreakpointsClassNames = Record<CSSBreakpoints | "none", string>;

/**
 * JS брейкпоинты выделены в отдельный тип, т.к. на данный момент нужны не все брейкпоинты, что используются в
 * адаптивности через CSS, а также имеются свои тонкости по типу `mobileLandscapeHeight`.
 */
export type JSBreakpoints =
  | "desktopPlus"
  | "tablet"
  | "smallTabletPlus"
  | "smallTablet"
  | "mobile"
  | "mediumHeight"
  | "mobileLandscapeHeight";

export type MediaQueries = Record<JSBreakpoints, MediaQueryList>;

/**
 * Используется в `packages/vkui/scripts/generateCSSCustomMedias.mjs`, который отвечает за генерацию
 * `packages/vkui/styles/customMedias.generated.css`.
 */
export type CSSCustomMedias = Record<
  | `--sizeX-${Size}`
  | `--sizeY-${Size}`
  | `--viewWidth-${CSSBreakpoints}`
  | "--hover-has"
  | "--hover-has-not"
  | "--pointer-has"
  | "--pointer-has-not"
  | "--reduce-motion"
  | "--desktop"
  | "--mobile",
  string
>;
