import type { CSSProperties } from "vue";
import type { Decorator } from "@storybook/vue3";

import AppRoot from "../../src/components/AppRoot/AppRoot.vue";
import AdaptivityProvider from "../../src/components/AdaptivityProvider/AdaptivityProvider.vue";
import ConfigProvider from "../../src/components/ConfigProvider/ConfigProvider.vue";

const CenteredStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const withVKUIWrapper: Decorator = (_, context) => {
  const { hasPointer = false, platform } = context.globals;

  const { centered } = context.parameters;

  const style: CSSProperties = {
    ...(centered ? CenteredStyle : {}),
  };

  return {
    components: { ConfigProvider, AdaptivityProvider, AppRoot },
    setup: () => {
      return {
        hasPointer,
        platform,
        style,
      };
    },
    template: `
    <ConfigProvider v-bind="{ platform }">
      <AdaptivityProvider v-bind="{ hasPointer }">
        <AppRoot v-bind="{ style }">
          <story />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
    `,
  };

  /* return h(ConfigProvider, { platform }, () => {
    return h(AdaptivityProvider, { hasPointer }, () => {
      return h(
        AppRoot,
        { style },
        {
          default: () => h(Story() as RenderFunction),
        }
      );
    });
  }); */
};
