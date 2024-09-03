import type { AppearanceType } from "../../lib/appearance";
// import { platform, type PlatformType } from "../../lib/platform";
// import type { TokensClassNames } from "../../lib/tokens";

export interface ConfigProvider {
  isWebView?: boolean;
  hasCustomPanelHeaderAfter?: boolean;
  customPanelHeaderAfterMinWidth?: number | string;
  appearance?: AppearanceType | undefined;
  transitionMotionEnabled?: boolean;
  platform?: PlatformType;
  tokensClassNames?: TokensClassNames;
  locale?: string;
}
