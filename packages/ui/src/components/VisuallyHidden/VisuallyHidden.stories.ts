import type { Meta, StoryObj } from "@storybook/vue3";
import VisuallyHidden from "./VisuallyHidden.vue";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Service/VisuallyHidden",
  component: VisuallyHidden,
  args: {
    default:
      "Этот текст скрыт визуально, но доступен для ассистивных технологий!",
  },
};

export default meta;

export const Playground: StoryObj<typeof VisuallyHidden> = {};
