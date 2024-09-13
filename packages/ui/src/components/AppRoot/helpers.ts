import type { SizeTypeValues } from "../../lib/adaptivity";
import { AppRootUserSelectMode, AppRootMode, AppRootLayout } from "./types";
import styles from "./AppRoot.module.css";

type ContainerClassNamesProps = {
  mode: AppRootMode;
  layout?: AppRootLayout;
  tokensClassName: string;
  sizeX: SizeTypeValues | "none";
  sizeY: SizeTypeValues | "none";
};

export const getClassNamesByMode = ({
  mode,
  layout,
  tokensClassName,
  sizeX,
  sizeY,
}: ContainerClassNamesProps): [string[], string[]] => {
  const baseClassNames: string[] = ["vkui__root"];
  const stylesClassNames: string[] = [tokensClassName];

  if (mode === "full" || mode === "embedded") {
    if (layout) {
      const vkuiLayoutClassNames = {
        card: "vkui--layout-card",
        plain: "vkui--layout-plain",
      };
      stylesClassNames.push(vkuiLayoutClassNames[layout]);
    }

    if (sizeX !== "compact") {
      const vkuiSizeXClassNames = {
        none: "vkui--sizeX-none",
        regular: "vkui--sizeX-regular",
      };
      stylesClassNames.push(vkuiSizeXClassNames[sizeX]);
    }

    if (sizeY !== "regular") {
      const vkuiSizeYClassNames = {
        none: "vkui--sizeY-none",
        compact: "vkui--sizeY-compact",
      };
      stylesClassNames.push(vkuiSizeYClassNames[sizeY]);
    }

    if (mode === "embedded") {
      baseClassNames.push("vkui__root--embedded");
    }
  }

  return [baseClassNames, stylesClassNames];
};

export const getUserSelectModeClassName = ({
  userSelectMode,
  isWebView,
  hasPointer,
}: {
  userSelectMode: AppRootUserSelectMode | undefined;
  isWebView: boolean;
  hasPointer: boolean | undefined;
}): string | null => {
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
};
