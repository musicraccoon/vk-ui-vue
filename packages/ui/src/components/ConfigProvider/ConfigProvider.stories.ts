import { defineComponent } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import ConfigProvider from "./ConfigProvider.vue";
import { useConfig } from "../../composables/useConfig";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof ConfigProvider> = {
  title: "Service/ConfigProvider",
  component: ConfigProvider,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default meta;

export const Playground: StoryObj<typeof ConfigProvider> = {
  render: (args) => {
    const DisplayConfigProvider = defineComponent({
      name: "DisplayConfigProvider",
      setup() {
        const config = useConfig();

        return { config };
      },
      template: "<pre>{{ config }}</pre>",
    });

    return {
      components: { ConfigProvider, DisplayConfigProvider },
      setup() {
        return { args };
      },
      template: `
        <ConfigProvider v-bind="args">
          <DisplayConfigProvider />
        </ConfigProvider>
      `,
    };
  },
};
