import { h } from "vue";
import type { CSSProperties, RenderFunction } from "vue";
import type { Decorator } from "@storybook/vue3";

import AppRoot from "../../src/components/AppRoot/AppRoot.vue";
import ConfigProvider from "../../src/components/ConfigProvider/ConfigProvider.vue";

const CenteredStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const withVKUIWrapper: Decorator = (Story, context) => {
  const { platform } = context.globals;

  const { centered } = context.parameters;

  const style: CSSProperties = {
    ...(centered ? CenteredStyle : {}),
  };

  return h(ConfigProvider, () =>
    h(AppRoot, { style }, { default: () => h(Story() as RenderFunction) })
  );
};
