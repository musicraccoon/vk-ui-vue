export const useReducedMotion = (): boolean => {
  return window.matchMedia("screen and (prefers-reduced-motion: reduce)")
    .matches;
};
