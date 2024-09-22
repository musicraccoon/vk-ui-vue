import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "./Badge.vue";
import { CanvasFullLayout } from "../../../.storybook/constants";

const meta: Meta<typeof Badge> = {
  title: "Blocks/Badge",
  component: Badge,
  parameters: CanvasFullLayout,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

export const NewMode: Story = {
  args: {
    mode: "new",
    default: "Есть обновление",
  },
};

export const ProminentMode: Story = {
  args: {
    mode: "prominent",
    default: "Новый раздел",
  },
};
