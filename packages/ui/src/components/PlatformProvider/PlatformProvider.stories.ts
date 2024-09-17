import { defineComponent } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import PlatformProvider from "./PlatformProvider.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";
import { Platform } from "../../lib/platform";
import { useConfig } from "../../composables/useConfig";

const meta: Meta<typeof PlatformProvider> = {
  title: "Service/PlatformProvider",
  component: PlatformProvider,
  argTypes: {
    value: {
      control: { type: "select" },
      options: Object.values(Platform),
    },
  },
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default meta;

const DisplayPlatformProvider = defineComponent({
  name: "DisplayPlatformProvider",
  setup() {
    const config = useConfig()!;

    return { config };
  },
  template: `<div style="padding: 5px">Inner PlatformProvider: {{ config.platform }}</div>`,
});

export const Playground: StoryObj<typeof PlatformProvider> = {
  render: (args) => {
    console.log(args);

    return {
      components: { PlatformProvider, DisplayPlatformProvider },
      setup() {
        const config = useConfig();

        return { args, config };
      },
      template: `
        <PlatformProvider :value="args.value ?? config.platform">
          <div style="padding: 5px">Outer PlatformProvider: {{ config.platform }}</div>
          <DisplayPlatformProvider />
        </PlatformProvider>
      `,
    };
  },
};
