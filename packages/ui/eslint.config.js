import path from "node:path";
import { fileURLToPath } from "node:url";

import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...pluginVue.configs["flat/recommended"],
  ...compat.extends("@vue/eslint-config-typescript/recommended"),
  eslintConfigPrettier,
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
