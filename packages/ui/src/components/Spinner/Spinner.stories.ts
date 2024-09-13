import type { Meta, StoryObj } from "@storybook/vue3";
import Spinner from "./Spinner.vue";

const meta: Meta<typeof Spinner> = {
  title: "Blocks/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "regular", "medium", "large"],
    },
  },
};

export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    size: "regular",
    disableAnimation: false,
  },
};
