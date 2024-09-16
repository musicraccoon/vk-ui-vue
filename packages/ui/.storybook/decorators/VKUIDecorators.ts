import { ref, type CSSProperties } from "vue";
import type { Decorator } from "@storybook/vue3";

import AppRoot from "../../src/components/AppRoot/AppRoot.vue";
import AdaptivityProvider from "../../src/components/AdaptivityProvider/AdaptivityProvider.vue";
import ConfigProvider from "../../src/components/ConfigProvider/ConfigProvider.vue";
import { Platform } from "../../src/lib/platform";

const CenteredStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const platform = ref<Platform>();

export const withVKUIWrapper: Decorator = (_, context) => {
  const globals = context.globals;

  const hasPointer = globals.hasPointer;
  platform.value = globals.platform;

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
};
