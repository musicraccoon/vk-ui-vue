import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Blocks/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["s", "m", "l"],
    },
    mode: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary", "outline", "link"],
    },
    appearance: {
      control: { type: "radio" },
      options: [
        "accent",
        "positive",
        "negative",
        "neutral",
        "overlay",
        "accent-invariable",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "s",
    mode: "primary",
    appearance: "accent",
  },
};
