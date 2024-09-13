import { computed } from "vue";
import { useAdaptivity } from "../useAdaptivity";
import { usePlatform } from "../usePlatform";
import {
  deviceTypeClassNames,
  sizeXCompactClassNames,
  sizeXRegularClassNames,
  sizeYCompactClassNames,
  sizeYRegularClassNames,
  viewWidthClassNames,
} from "./constants";
import {
  getAdaptiveDeviceType,
  getAdaptiveSizeType,
  getAdaptiveViewWidth,
} from "./helpers";
import type { UseAdaptivityConditionalRender } from "./types";

export const useAdaptivityConditionalRender = () => {
  const adaptivity = useAdaptivity();
  const platform = usePlatform();

  return computed(() => {
    const sizeX = getAdaptiveSizeType(
      adaptivity.value.sizeX,
      sizeXCompactClassNames,
      sizeXRegularClassNames
    );
    const sizeY = getAdaptiveSizeType(
      adaptivity.value.sizeY,
      sizeYCompactClassNames,
      sizeYRegularClassNames
    );
    const viewWidth = getAdaptiveViewWidth(
      adaptivity.value.viewWidth,
      viewWidthClassNames
    );
    const deviceType = getAdaptiveDeviceType(
      adaptivity.value.viewWidth,
      adaptivity.value.viewHeight,
      adaptivity.value.hasPointer,
      platform,
      deviceTypeClassNames
    );

    return {
      sizeX,
      sizeY,
      viewWidth,
      deviceType,
    } as UseAdaptivityConditionalRender;
  });
};
