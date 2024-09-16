import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/styles/customMedias.generated.css"],
        }),
        postcssCustomMedia(),
      ],
    },
  },
});
