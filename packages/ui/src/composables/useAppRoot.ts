import { inject, type InjectionKey } from "vue";
import { AppRootContext } from "../components/AppRoot/types";

export const appRootInjectionKey: InjectionKey<AppRootContext> =
  Symbol("AppRoot");

export const useAppRoot = () => {
  const appRoot = inject(appRootInjectionKey);

  return appRoot;
};
