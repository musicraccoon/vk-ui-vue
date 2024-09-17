import type { Meta, StoryObj } from "@storybook/vue3";
import Clickable from "./Clickable.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Clickable> = {
  title: "Blocks/Clickable",
  component: Clickable,
  parameters: { ...CanvasFullLayout, DisableCartesianParam },
};

export default meta;

export const Playground: StoryObj<typeof Clickable> = {
  render: () => {
    return {
      components: { Clickable },
      template: `
        <Clickable>
          <div :style="{ padding: 16 }">Clickable</div>
        </Clickable>
      `,
    };
  },
};
