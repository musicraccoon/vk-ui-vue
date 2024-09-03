import { inject } from "vue";

export const UseConfigProviderSymbol = Symbol("ConfigProvider");

export const useConfigProvider = () => {
  const ConfigProvider = inject(UseConfigProviderSymbol);

  if (!ConfigProvider) {
    throw new Error("ConfigProvider not found!");
  }

  return ConfigProvider;
};
