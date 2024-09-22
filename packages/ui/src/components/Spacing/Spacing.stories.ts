import type { Meta, StoryObj } from "@storybook/vue3";
import Spacing from "./Spacing.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Spacing> = {
  title: "Blocks/Spacing",
  component: Spacing,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default meta;

type Story = StoryObj<typeof Spacing>;

export const Playground: Story = {
  decorators: [
    () => {
      return {
        template: `
          <div>
            Before Space
            <story />
            After Space
          </div>
        `,
      };
    },
  ],
};
