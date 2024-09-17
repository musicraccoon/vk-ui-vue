import { inject } from "vue";
import type { InjectionKey, ComputedRef } from "vue";
import type { ConfigProvider } from "../components/ConfigProvider/types";

export const configInjectionKey: InjectionKey<ComputedRef<ConfigProvider>> =
  Symbol("ConfigProvider");

export const useConfig = () => {
  const configProvider = inject(configInjectionKey);

  return configProvider;
};
