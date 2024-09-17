import { defineComponent } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import AppearanceProvider from "./AppearanceProvider.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";
import { Appearance } from "../../lib/appearance";

const meta: Meta<typeof AppearanceProvider> = {
  title: "Service/AppearanceProvider",
  component: AppearanceProvider,
  argTypes: {
    value: {
      control: { type: "select" },
      options: Object.values(Appearance),
    },
  },
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default meta;

export const Playground: StoryObj<typeof AppearanceProvider> = {
  render: (args) => {
    return {
      components: { AppearanceProvider },
      setup() {
        return { args };
      },
      template: `
        <AppearanceProvider :value="args.value">
          <div
            :style="{
              padding: 5,
              background: 'var(--vkui--color_background)',
              color: 'var(--vkui--color_text_primary)'
            }"
          >
            AppearanceProvider
          </div>
        </AppearanceProvider>
      `,
    };
  },
  args: {
    value: Appearance.Dark,
  },
};
