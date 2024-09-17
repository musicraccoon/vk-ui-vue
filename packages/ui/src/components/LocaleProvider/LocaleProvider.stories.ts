import type { Meta, StoryObj } from "@storybook/vue3";
import LocaleProvider from "./LocaleProvider.vue";
import {
  CanvasFullLayout,
  DisableCartesianParam,
} from "../../../.storybook/constants";
import { useConfig } from "../../composables/useConfig";
import { defineComponent } from "vue";

const meta: Meta<typeof LocaleProvider> = {
  title: "Service/LocaleProvider",
  component: LocaleProvider,
  argTypes: {
    locale: {
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
        const { locale: parentLocale } = useConfig()!.value;

        return { args, parentLocale };
      },
      template: `
        <LocaleProvider :locale="args.locale ?? parentLocale">
          <div style="padding: 5px">Outer LocaleProvider: {{ parentLocale }}</div>
          <DisplayLocaleProvider />
        </LocaleProvider>
      `,
    };
  },
};
