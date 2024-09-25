import { useConfig } from "./useConfig";

export const usePlatform = () => {
  const config = useConfig();

  return config!.value.platform;
};
