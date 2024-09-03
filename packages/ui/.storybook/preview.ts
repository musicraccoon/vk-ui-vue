import "../src/styles/constants.css";
import "../src/styles/themes.css";
import "../src/styles/common.css";
import "../src/styles/dynamicTokens.css";
import "../src/styles/adaptivity.module.css";

import type { Preview } from "@storybook/vue3";

import { withVKUIWrapper } from "./decorators/VKUIDecorators";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [withVKUIWrapper],
};

export default preview;
