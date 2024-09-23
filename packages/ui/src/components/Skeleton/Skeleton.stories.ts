import type { Meta, StoryObj } from "@storybook/vue3";
import Skeleton from "./Skeleton.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Skeleton> = {
  title: "Blocks/Skeleton",
  component: Skeleton,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
    controls: {
      include: ["colorFrom", "colorTo", "noAnimation", "duration"],
    },
  },
};

export default meta;

export const Playground: StoryObj<typeof Skeleton> = {};
