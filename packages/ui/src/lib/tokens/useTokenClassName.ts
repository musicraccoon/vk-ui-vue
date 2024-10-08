import { useConfig } from "../../composables/useConfig";
import { type Appearance, DEFAULT_APPEARANCE } from "../appearance";
import { Platform, type PlatformType } from "../platform";
import { DEFAULT_TOKENS_CLASS_NAMES } from "./constants";
import type {
  TokensClassNames,
  TokensClassNamesByAppearances,
  TokensClassNamesByPlatforms,
} from "./types";

const isTokensClassNamesForPlatforms = (
  tokensClassNames: TokensClassNames
): tokensClassNames is TokensClassNamesByPlatforms =>
  Platform.Android in tokensClassNames ||
  Platform.IOS in tokensClassNames ||
  Platform.VKCOM in tokensClassNames;

const getTokenClassNameByAppearance = (
  appearance: Appearance,
  tokensClassNames?: TokensClassNamesByAppearances
) => (tokensClassNames ? tokensClassNames[appearance] : undefined);

const getAppearanceTokenClassNameByPlatform = (
  platform: PlatformType,
  tokensClassNames?: TokensClassNamesByPlatforms
) => (tokensClassNames ? tokensClassNames[platform] : undefined);

/**
 * @private
 */
export const useTokensClassName = (): string => {
  const {
    platform,
    appearance = DEFAULT_APPEARANCE,
    tokensClassNames,
  } = useConfig()!.value;

  const appearanceSchemeClassName = isTokensClassNamesForPlatforms(
    tokensClassNames
  )
    ? getAppearanceTokenClassNameByPlatform(platform, tokensClassNames)
    : tokensClassNames;

  const tokensClassName = getTokenClassNameByAppearance(
    appearance,
    appearanceSchemeClassName
  );

  return tokensClassName
    ? tokensClassName
    : DEFAULT_TOKENS_CLASS_NAMES[platform][appearance];
};
