import { Platform } from "../../lib/platform";
import type { Appearance } from "../../lib/appearance";
import type { TokensClassNames } from "../../lib/tokens";

export interface ConfigProvider {
  /**
   * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере.
   *
   * В условиях когда:
   * - `isWebView={true}`
   * - platform="ios"
   *
   * для компонента `View` включается возможность навигации через смахивание.
   */
  isWebView: boolean;
  /**
   * При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского
   * "плавающего" элемента (например, панель управления webview).
   *
   * > Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых
   * > библиотекой.
   */
  hasCustomPanelHeaderAfter: boolean;
  /**
   * Задаёт необходимый минимальную ширину слота `after` в `PanelHeader` под пользовательский
   * "плавающий" элемент (например, ширина панели управления webview).
   *
   * Учитывается только при `hasCustomPanelHeaderAfter={true}` (см. документацию `hasCustomPanelHeaderAfter`).
   *
   * @default 90
   */
  customPanelHeaderAfterMinWidth: number | string;
  /**
   * Тип цветовой схемы – `light` или `dark`
   */
  appearance: Appearance | undefined;
  /**
   * Включена ли анимация переходов между экранами в `Root` и `View`
   */
  transitionMotionEnabled: boolean;
  /**
   * Платформа
   */
  platform: Platform;
  /**
   * CSS классы, определяющие набор токенов.
   *
   * - Используйте `{ light?: '<css_class>', dark?: '<css_class>' }`, чтобы задать для всех платформ одинаковый набор токенов для светлой и/или тёмной тем.
   * - Используйте `{ [key in 'android' | 'ios' | 'vkcom']?: '<css_class>' }`, чтобы задать для одной или нескольких платформ свой набор токенов.
   *
   * @default
   * {
   *   android: {
   *     light: 'vkui--vkBase--light',
   *     dark: 'vkui--vkBase--dark',
   *   },
   *   ios: {
   *     light: 'vkui--vkIOS--light',
   *     dark: 'vkui--vkIOS--dark',
   *   },
   *   vkcom: {
   *     light: 'vkui--vkCom--light',
   *     dark: 'vkui--vkCom--dark',
   *   }
   * }
   */
  tokensClassNames: TokensClassNames;
  /**
   * Строка с языковой меткой BCP 47
   */
  locale: string;
}
