import "../src/styles/constants.css";
import "../src/styles/themes.css";
import "../src/styles/common.css";
import "../src/styles/dynamicTokens.css";
import "../src/styles/adaptivity.module.css";

import type { Preview } from "@storybook/vue3";

import AppRoot from "../src/components/AppRoot/AppRoot.vue";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    () => {
      return {
        components: { AppRoot },
        template: "<AppRoot><story/></AppRoot>",
      };
    },
  ],
};

export default preview;
