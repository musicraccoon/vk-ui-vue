import { useConfig } from "./useConfig";

export const usePlatform = () => {
  const { platform } = useConfig();

  return platform;
};
