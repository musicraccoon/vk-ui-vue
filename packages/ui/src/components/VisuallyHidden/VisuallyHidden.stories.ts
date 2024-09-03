import type { Meta, StoryObj } from "@storybook/vue3";
import VisuallyHidden from "./VisuallyHidden.vue";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Service/VisuallyHidden",
  component: VisuallyHidden,
  render: (args) => {
    return {
      components: { VisuallyHidden },
      setup() {
        return { args };
      },
      template: `<VisuallyHidden>{{args.default}}</VisuallyHidden>`,
    };
  },
  args: {},
};

export default meta;

export const Playground: StoryObj<typeof VisuallyHidden> = {
  args: {
    component: "span",
    default:
      "Этот текст скрыт визуально, но доступен для ассистивных технологий!",
  },
};
