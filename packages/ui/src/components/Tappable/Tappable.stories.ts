import type { Meta, StoryObj } from "@storybook/vue3";
import Tappable from "./Tappable.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Tappable> = {
  title: "Blocks/Tappable",
  component: Tappable,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default meta;

export const Playground: StoryObj<typeof Tappable> = {
  render: (args) => {
    return {
      components: { Tappable },
      setup() {
        return { args };
      },
      template: `
        <Tappable v-bind="args" @click="() => {}">
          <div style="padding: 16px">
            Кнопка
          </div>
        </Tappable>
      `,
    };
  },
};
