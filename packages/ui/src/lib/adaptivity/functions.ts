import { Size, ViewWidth, ViewHeight } from "./constants";
import { Breakpoints } from "./breakpoints";
import type { MediaQueries } from "./types";
import { PlatformType } from "../platform";

export const isCompactByViewHeight = (viewHeight?: ViewHeight): boolean => {
  return viewHeight !== undefined && viewHeight <= ViewHeight.ExtraSmall;
};

export const isCompactByViewWidth = (
  viewWidth?: ViewWidth,
  hasPointer?: boolean
): boolean | undefined => {
  return (
    viewWidth !== undefined && viewWidth >= ViewWidth.SmallTablet && hasPointer
  );
};

export const getSizeX = (viewWidth: ViewWidth): Size => {
  return viewWidth <= ViewWidth.Mobile ? Size.Compact : Size.Regular;
};

export const getSizeY = (
  viewWidth: ViewWidth,
  viewHeight: ViewHeight,
  hasPointer: boolean
): Size => {
  if (
    isCompactByViewWidth(viewWidth, hasPointer) ||
    isCompactByViewHeight(viewHeight)
  ) {
    return Size.Compact;
  }
  return Size.Regular;
};

export const getViewWidthByViewportWidth = (
  viewportWidth: number
): ViewWidth => {
  if (viewportWidth >= Breakpoints.Desktop) {
    return ViewWidth.Desktop;
  }
  if (viewportWidth >= Breakpoints.Tablet) {
    return ViewWidth.Tablet;
  }
  if (viewportWidth >= Breakpoints.SmallTablet) {
    return ViewWidth.SmallTablet;
  }
  if (viewportWidth >= Breakpoints.Mobile) {
    return ViewWidth.Mobile;
  }
  return ViewWidth.SmallMobile;
};

export const getViewWidthByMediaQueries = (
  mediaQueries: MediaQueries
): ViewWidth => {
  if (mediaQueries.desktopPlus.matches) {
    return ViewWidth.Desktop;
  }

  if (mediaQueries.tablet.matches) {
    return ViewWidth.Tablet;
  }

  if (mediaQueries.smallTablet.matches) {
    return ViewWidth.SmallTablet;
  }

  if (mediaQueries.mobile.matches) {
    return ViewWidth.Mobile;
  }

  return ViewWidth.SmallMobile;
};

export const getViewHeightByViewportHeight = (
  viewportHeight: number
): ViewHeight => {
  if (viewportHeight >= Breakpoints.MediumHeight) {
    return ViewHeight.Medium;
  }
  if (viewportHeight >= Breakpoints.MobileLandScapeHeight) {
    return ViewHeight.Small;
  }
  return ViewHeight.ExtraSmall;
};

export const getViewHeightByMediaQueries = (
  mediaQueries: MediaQueries
): ViewHeight => {
  if (mediaQueries.mediumHeight.matches) {
    return ViewHeight.Medium;
  }

  if (mediaQueries.mobileLandscapeHeight.matches) {
    return ViewHeight.Small;
  }

  return ViewHeight.ExtraSmall;
};

/**
 * Проверка на Desktop.
 *
 * Функция гарантировано вернёт `boolean` или `null` в зависимости от условий.
 *
 * Возвращаем `null` в случае, если у нас недостаточно данных, чтобы определить платформу.
 *
 * ⚠️ При передаче 'vkcom' всегда будет возвращать `true`.
 */
export function tryToCheckIsDesktop(viewWidth: ViewWidth, viewHeight: ViewHeight, hasPointer: undefined | boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: ViewWidth, viewHeight: undefined, hasPointer: boolean, platform?: PlatformType): boolean; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidth, viewHeight: undefined, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined | ViewHeight, hasPointer: undefined, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined, viewHeight: undefined, hasPointer: undefined | boolean, platform?: PlatformType): null; // prettier-ignore
export function tryToCheckIsDesktop(viewWidth: undefined | ViewWidth, viewHeight: undefined | ViewHeight, hasPointer: undefined | boolean, platform?: PlatformType): null | boolean; // prettier-ignore
export function tryToCheckIsDesktop(
  viewWidth?: ViewWidth,
  viewHeight?: ViewHeight,
  hasPointer?: boolean,
  platform?: PlatformType
): null | boolean {
  // см. https://github.com/VKCOM/VKUI/pull/2473
  const IS_VKCOM_CRUTCH = platform === "vkcom";

  if (
    ((viewWidth === undefined || hasPointer === undefined) &&
      (viewWidth === undefined || viewHeight === undefined)) ||
    (hasPointer === undefined && viewHeight === undefined)
  ) {
    return IS_VKCOM_CRUTCH ? true : null;
  }

  const widthIsLikeDesktop = viewWidth >= ViewWidth.SmallTablet;
  const otherParametersIsLikeDesktop =
    hasPointer ||
    (viewHeight !== undefined ? viewHeight >= ViewHeight.Medium : false);

  return (
    (widthIsLikeDesktop && otherParametersIsLikeDesktop) || IS_VKCOM_CRUTCH
  );
}
