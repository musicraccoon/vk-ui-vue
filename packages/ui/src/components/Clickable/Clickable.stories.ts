import type { Meta, StoryObj } from "@storybook/vue3";
import Clickable from "./Clickable.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Clickable> = {
  title: "Blocks/Clickable",
  component: Clickable,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
    controls: {
      include: [
        "class",
        "as",
        "focusVisibleMode",
        "hasHover",
        "hovered",
        "activated",
        "hasActive",
        "hasHoverWithChildren",
        "unlockParentHover",
        "activeEffectDelay",
        "activeClassName",
        "hoverClassName",
      ],
    },
  },
};

export default meta;

export const Playground: StoryObj<typeof Clickable> = {
  render: (args) => {
    return {
      components: { Clickable },
      setup() {
        const onFocus = () => {
          console.log("onFocus in stories!");
        };
        return { args, onClick: onFocus };
      },
      template: `
        <Clickable v-bind="args" @click="() => {}" @focus="onFocus">
          <div :style="{ padding: 16 + 'px' }">
            Clickable
          </div>
        </Clickable>
      `,
    };
  },
};
