import { inject, type InjectionKey, type ComputedRef } from "vue";
import { AdaptivityProps } from "../components/AdaptivityProvider/types";

export const adaptivityInjectionKey: InjectionKey<
  ComputedRef<AdaptivityProps>
> = Symbol("AdaptivityProvider");

export const useAdaptivity = () => {
  const adaptivityProvider = inject(adaptivityInjectionKey);

  if (!adaptivityProvider) {
    throw new Error("AdaptivityProvider not found!");
  }

  return adaptivityProvider;
};
