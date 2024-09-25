import { usePlatform } from "../../composables/usePlatform";
import { Platform } from "../../lib/platform";

export const useMaybeNeedRipple = (
  activeMode: string,
  hasPointer?: boolean
) => {
  const platform = usePlatform();

  return (
    platform === Platform.Android && !hasPointer && activeMode === "background"
  );
};
