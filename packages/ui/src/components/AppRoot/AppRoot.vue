<template>
  <div :class="$style['AppRoot']">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { getClassNamesByMode } from "./helpers";
import type {
  AppRootLayout,
  AppRootMode,
  AppRootScroll,
  AppRootUserSelectMode,
  SafeAreaInsets,
} from "./types";

export interface AppRootProps {
  /**
   * Режим встраивания
   *
   * @default full
   */
  mode?: AppRootMode;
  /**
   * - `global` (по умолчанию) — VKUI-приложение скроллится вместе со страницей.
   * - `contain` — VKUI-приложение живет в отдельной зоне и скроллится независимо внутри `AppRoot` (например, в модалке).
   *
   * Полезно при использовании `mode="embedded"`.
   *
   * @default global
   */
  scroll?: AppRootScroll;
  /**
   * см. документацию [mdn web docs | env#values](https://developer.mozilla.org/en-US/docs/Web/CSS/env#values).
   */
  safeAreaInsets?: SafeAreaInsets;
  /**
   * Кастомный root-элемент портала
   */
  portalRoot?: HTMLElement;
  /**
   * Отключает рендер всплывающих компонентов в отдельном контейнере
   */
  disablePortal?: boolean;
  /**
   * По умолчанию, mode="embedded" переносит систему координат элементов с `position: fixed` на
   * свой контейнер через `transform: translate3d(0, 0, 0)`.
   *
   * Это поведение можно отключить с помощью этого параметра.
   */
  disableParentTransformForPositionFixedElements?: boolean;
  /**
   * Глобально задаёт тип оформления макета для компонентов
   * [Panel](https://vkcom.github.io/VKUI/#/Panel) и [Group](https://vkcom.github.io/VKUI/#/Group).
   */
  layout?: AppRootLayout;
  /**
   * Задаёт режим выбора текста (выделения текста) для всего приложения.
   * По умолчанию, если режим не задан, запрещает выбор текста в приложениях,
   * запущенных в webview (по значению свойства `isWebView` из [ConfigProvider](https://vkcom.github.io/VKUI/#/ConfigProvider)).
   *
   * - `enabled-with-pointer` – разрешает выбор текста, если устройство ввода типа `pointer` (например, `мышь`), в остальных случаях запрещает;
   * - `disabled` – запрещает выбор текста;
   * - `enabled` – разрешает выбор текста.
   *
   * @since 6.2.0
   */
  userSelectMode?: AppRootUserSelectMode;
}

const props = withDefaults(defineProps<AppRootProps>(), {
  mode: "full",
  scroll: "global",
  safeAreaInsets: undefined,
  portalRoot: undefined,
  layout: undefined,
  userSelectMode: undefined,
});

// const { hasPointer, sizeX = 'none', sizeY = 'none' } = useAdaptivity();

/* const [baseClassNames, stylesClassNames] = getClassNamesByMode({
  mode: props.mode,
  layout: props.layout,
  tokensClassName: props.tokensClassName,
  sizeX: props.sizeX,
  sizeY: props.sizeY,
}); */

switch (props.mode) {
  case "full":
    /*  */
    break;
}
</script>

<style src="./AppRoot.module.css" module></style>
