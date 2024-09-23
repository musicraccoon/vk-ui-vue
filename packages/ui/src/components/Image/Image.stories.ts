import type { Meta, StoryObj } from "@storybook/vue3";
import Image from "./Image.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";

const meta: Meta<typeof Image> = {
  title: "Blocks/Image",
  component: Image,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default meta;

export const Playground: StoryObj<typeof Image> = {};
