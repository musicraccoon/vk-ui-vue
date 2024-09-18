import type { Meta, StoryObj } from "@storybook/vue3";
import Div from "./Div.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Div> = {
  title: "Blocks/Div",
  component: Div,
  parameters: { ...CanvasFullLayout, DisableCartesianParam },
};

export default meta;

export const Playground: StoryObj<typeof Div> = {};
