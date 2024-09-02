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

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "regular",
  },
};
