import { defineComponent } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import LocaleProvider from "./LocaleProvider.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";
import { useConfig } from "../../composables/useConfig";

const meta: Meta<typeof LocaleProvider> = {
  title: "Service/LocaleProvider",
  component: LocaleProvider,
  argTypes: {
    value: {
      control: { type: "select" },
      options: ["ru", "en", "fr", "ua"],
    },
  },
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default meta;

const DisplayLocaleProvider = defineComponent({
  name: "DisplayLocaleProvider",
  setup() {
    const config = useConfig()!;

    return { config };
  },
  template: `<div style="padding: 5px">Inner LocaleProvider: {{ config.locale }}</div>`,
});

export const Playground: StoryObj<typeof LocaleProvider> = {
  render: (args) => {
    return {
      components: { LocaleProvider, DisplayLocaleProvider },
      setup() {
        const config = useConfig();

        return { args, config };
      },
      template: `
        <LocaleProvider :value="args.value ?? config.locale">
          <div style="padding: 5px">Outer LocaleProvider: {{ locale }}</div>
          <DisplayLocaleProvider />
        </LocaleProvider>
      `,
    };
  },
};
