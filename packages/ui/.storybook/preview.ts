import "../src/styles/constants.css";
import "../src/styles/themes.css";
import "../src/styles/common.css";
import "../src/styles/dynamicTokens.css";
import "../src/styles/adaptivity.module.css";

import type { Preview } from "@storybook/vue3";
import { Breakpoints } from "../src/lib/adaptivity";
import { Platform } from "../src/lib/platform";

import { withVKUIWrapper } from "./decorators/VKUIDecorators";
import { Appearance } from "../src/lib/appearance";

interface CustomViewPortItem {
  name: string;
  styles: {
    width: string;
    height: string;
  };
}

const customViewports = Object.entries(Breakpoints)
  .filter(([_, value]) => typeof value === "number")
  .reduce<Record<string, CustomViewPortItem>>((previousValue, [key, value]) => {
    if (key === "MobileLandScapeHeight" || key === "MediumHeight") {
      return previousValue;
    }
    previousValue[key] = {
      name: `${key} (${value}w)`,
      styles: {
        width: `${value}px`,
        height: `667px`,
      },
    };

    return previousValue;
  }, {});

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
    controls: {
      expanded: true,
    },
    viewport: { viewports: customViewports },
  },
  globalTypes: {
    appearance: {
      defaultValue: Appearance.Light,
    },
    hasPointer: {
      defaultValue: true,
    },
    platform: {
      name: "Platform",
      description: "Platform for components",
      defaultValue: Platform.Android,
      toolbar: {
        icon: "mobile",
        items: Object.values(Platform),
        title: "Platform",
        dynamicTitle: true,
      },
    },
  },
  decorators: [withVKUIWrapper],
};

export default preview;
