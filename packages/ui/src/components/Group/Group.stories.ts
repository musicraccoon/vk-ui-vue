import type { Meta, StoryObj } from "@storybook/vue3";
import Group from "./Group.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Group> = {
  title: "Blocks/Group",
  component: Group,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Playground: Story = {};
