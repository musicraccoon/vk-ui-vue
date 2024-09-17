import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";
import { CanvasFullLayout } from "../../../.storybook/constants";

const meta: Meta<typeof Button> = {
  title: "Blocks/Button",
  component: Button,
  parameters: CanvasFullLayout,
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

export const Playground: StoryObj<typeof Button> = {
  args: {
    size: "s",
    mode: "primary",
    appearance: "accent",
  },
};
