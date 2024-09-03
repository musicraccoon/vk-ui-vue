import styles from "./AppRoot.module.css";
import { AppRootUserSelectMode } from "./types";

export function getUserSelectModeClassName({
  userSelectMode,
  isWebView,
  hasPointer,
}: {
  userSelectMode: AppRootUserSelectMode | undefined;
  isWebView: boolean;
  hasPointer: boolean | undefined;
}): string | null {
  switch (userSelectMode) {
    case "enabled-with-pointer": {
      if (hasPointer) {
        return null;
      }

      const enableByHasPointerMediaQuery = hasPointer === undefined;
      if (enableByHasPointerMediaQuery) {
        return styles["AppRoot--pointer-none"];
      }

      return styles["AppRoot--user-select-none"];
    }
    case "disabled":
      return styles["AppRoot--user-select-none"];
    case "enabled":
      return null;
    default:
      return isWebView ? styles["AppRoot--user-select-none"] : null;
  }
}
