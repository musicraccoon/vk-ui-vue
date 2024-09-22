import type { Meta, StoryObj } from "@storybook/vue3";
import { CanvasFullLayout } from "../../../.storybook/constants";
import Spinner from "./Spinner.vue";

const meta: Meta<typeof Spinner> = {
  title: "Blocks/Spinner",
  component: Spinner,
  parameters: CanvasFullLayout,
  args: {
    default: "Загрузка...",
  },
};

export default meta;

export const Playground: StoryObj<typeof meta> = {};
