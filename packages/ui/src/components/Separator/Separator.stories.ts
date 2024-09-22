import type { Meta, StoryObj } from "@storybook/vue3";
import Separator from "./Separator.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Separator> = {
  title: "Blocks/Separator",
  component: Separator,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Playground: Story = {
  decorators: [
    () => ({
      template: `
        <div>
          Before Separator
          <story />
          After Separator
        </div>
      `,
    }),
  ],
};
