/**
 * Public API.
 * Классы размеров. Заимствованы из гайдлайнов Apple.
 *
 * Ссылки
 * - {@link https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=3220%3A0 | Figma VKUI – Адаптивность}
 * - {@link https://developer.apple.com/design/human-interface-guidelines/foundations/layout/ | Layout - Foundations - Human Interface Guidelines - Design}
 */
export enum Size {
  Compact = "compact",
  Regular = "regular",
}

/**
 * Public API.
 * Брейкпоинты на ширину.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export enum ViewWidth {
  SmallMobile = 1,
  Mobile = 2,
  SmallTablet = 3,
  Tablet = 4,
  Desktop = 5,
}

/**
 * Public API.
 * Брейкпоинт на высоту.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export enum ViewHeight {
  ExtraSmall = 1,
  Small = 2,
  Medium = 3,
}

export const VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP: Record<
  ViewWidth,
  "smallMobileMinus" | "mobile" | "smallTablet" | "tablet" | "desktopPlus"
> = {
  [ViewWidth.SmallMobile]: "smallMobileMinus",
  [ViewWidth.Mobile]: "mobile",
  [ViewWidth.SmallTablet]: "smallTablet",
  [ViewWidth.Tablet]: "tablet",
  [ViewWidth.Desktop]: "desktopPlus",
} as const;
