import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials", "./addons/pointer"],
  stories: ["../src/**/*.stories.ts"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      docgen: {
        plugin: "vue-component-meta",
        tsconfig: "tsconfig.app.json",
      },
    },
  },
};

export default config;
