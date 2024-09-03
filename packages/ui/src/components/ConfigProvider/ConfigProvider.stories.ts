import { h } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import ConfigProvider from "./ConfigProvider.vue";
import { useConfigProvider } from "./useConfigProvider";

const meta: Meta<typeof ConfigProvider> = {
  title: "Service/ConfigProvider",
  component: ConfigProvider,
};

export default meta;

export const Playground: StoryObj<typeof ConfigProvider> = {
  render: () => {
    return {
      setup() {
        const config = useConfigProvider();
        return () => h("pre", JSON.stringify(config.value));
      },
    };
  },
};
