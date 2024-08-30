import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.ts"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};

export default config;
