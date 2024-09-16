// import { detectIOS, noop } from '@vkontakte/vkjs';
import type { Version } from "../types";

export interface BrowserInfo {
  userAgent: string;
  system: "ios" | "";
  systemVersion: Version | null;
}

const memoized: { [index: string]: BrowserInfo } = {};

export function computeBrowserInfo(userAgent = ""): BrowserInfo {
  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  const browserInfo: BrowserInfo = {
    userAgent,
    system: "",
    systemVersion: null,
  };

  // TODO. Добавить функционал определения IOS устройства.
  // const { isIOS, iosMajor, iosMinor } = detectIOS(userAgent);

  if (false) {
    browserInfo.system = "ios";
    browserInfo.systemVersion = {
      major: iosMajor,
      minor: iosMinor,
    };
  }

  memoized[userAgent] = browserInfo;

  return browserInfo;
}
