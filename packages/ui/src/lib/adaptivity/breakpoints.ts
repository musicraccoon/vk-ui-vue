export enum Breakpoints {
  Desktop = 1280,
  Tablet = 1024,
  SmallTablet = 768,
  Mobile = 320,
  MobileLandScapeHeight = 415,
  MediumHeight = 720,
}

/**
 * Луч [a;+∞)
 */
export function widthPlus(a: Breakpoints): string {
  return `(min-width: ${a}px)`;
}

/**
 * Открытый луч (-∞;b)
 */
export function widthMinus(b: number): string {
  // NOTE: `not` плохо поддерживается, поэтому используем max-width и вычитаем
  // от числа 0.1
  return `(max-width: ${b - 0.1}px)`;
}

/**
 * Полуинтервал [a;b)
 */
export function widthHalfInterval(a: number, b: number): string {
  return `${widthPlus(a)} and ${widthMinus(b)}`;
}

/**
 * Луч [a;+∞)
 */
export function heightPlus(a: number): string {
  return `(min-height: ${a}px)`;
}

/**
 * Открытый луч (-∞;b)
 */
export function heightMinus(b: number): string {
  // NOTE: `not` плохо поддерживается, поэтому используем max-width и вычитаем
  // от числа 0.1
  return `(max-height: ${b - 0.1}px)`;
}

/**
 * Полуинтервал [a;b)
 */
export function heightHalfInterval(a: number, b: number): string {
  return `${heightPlus(a)} and ${heightMinus(b)}`;
}

export enum MediaQueries {
  DesktopPlus = widthPlus(Breakpoints.Desktop) as any,
  Tablet = widthHalfInterval(Breakpoints.Tablet, Breakpoints.Desktop) as any,
  SmallTabletPlus = widthPlus(Breakpoints.SmallTablet) as any,
  SmallTablet = widthHalfInterval(
    Breakpoints.SmallTablet,
    Breakpoints.Tablet
  ) as any,
  Mobile = widthHalfInterval(
    Breakpoints.Mobile,
    Breakpoints.SmallTablet
  ) as any,
  MediumHeight = heightPlus(Breakpoints.MediumHeight) as any,
  MobileLandscapeHeight = heightPlus(Breakpoints.MobileLandScapeHeight) as any,
}
