import { defineComponent } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import AdaptivityProvider from "./AdaptivityProvider.vue";
import ConfigProvider from "../ConfigProvider/ConfigProvider.vue";
import { useAdaptivityConditionalRender } from "../../composables/useAdaptivityConditionalRender";
import { Size } from "../../lib/adaptivity";

const meta: Meta<typeof AdaptivityProvider> = {
  title: "Service/AdaptivityProvider",
  argTypes: {
    sizeX: {
      control: { type: "radio" },
      options: Object.values(Size),
    },
    sizeY: {
      control: { type: "radio" },
      options: Object.values(Size),
    },
  },
};

export default meta;

export const PLayground: StoryObj<typeof ConfigProvider> = {
  render: (args) => {
    const DisplayAdaptivityProvider = defineComponent({
      name: "DisplayAdaptivityProvider",
      setup() {
        const adaptivityConditionalRender = useAdaptivityConditionalRender();
        const { sizeX, sizeY } = adaptivityConditionalRender.value;

        return { args, sizeX, sizeY, adaptivityConditionalRender };
      },
      template: `
        <div v-if="adaptivityConditionalRender.sizeX.compact" style="padding: 5px">Size X: Compact</div>
        <div v-if="adaptivityConditionalRender.sizeX.regular" style="padding: 5px">Size X: Regular</div>
        <div v-if="adaptivityConditionalRender.sizeY.compact" style="padding: 5px">Size Y: Compact</div>
        <div v-if="adaptivityConditionalRender.sizeY.regular" style="padding: 5px">Size Y: Regular</div>
    `,
    });
    return {
      components: { AdaptivityProvider, DisplayAdaptivityProvider },
      setup() {
        return { args };
      },
      template: `
        <AdaptivityProvider v-bind="args">
          <DisplayAdaptivityProvider />
        </AdaptivityProvider>
      `,
    };
  },
  args: {},
};
