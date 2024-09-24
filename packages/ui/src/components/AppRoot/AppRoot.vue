<template>
  <div ref="appRootRef" :class="[styles['AppRoot'], userSelectModeClassName]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, provide } from "vue";
import {
  getClassNamesByMode,
  getUserSelectModeClassName,
  setSafeAreaInsets,
} from "./helpers";
import type { AppRootProps } from "./types";
import { useAdaptivity } from "../../composables/useAdaptivity";
import { useTokensClassName } from "../../lib/tokens";
import { useKeyboardInputTracker } from "../../composables/useKeyboardInputTracker";
import { useConfig } from "../../composables/useConfig";
import { appRootInjectionKey } from "../../composables/useAppRoot";
import styles from "./AppRoot.module.css";

const props = withDefaults(defineProps<AppRootProps>(), {
  mode: "full",
  scroll: "global",
  safeAreaInsets: undefined,
  portalRoot: undefined,
  layout: undefined,
  userSelectMode: undefined,
});

const { hasPointer, sizeX = "none", sizeY = "none" } = useAdaptivity().value;
const { isWebView } = useConfig()!.value;
const tokensClassName = useTokensClassName();

const isKeyboardInputActive = useKeyboardInputTracker();
const appRootRef = ref<HTMLDivElement>();
const portalRootRef = ref<HTMLElement>();

const userSelectModeClassName = getUserSelectModeClassName({
  userSelectMode: props.userSelectMode,
  isWebView,
  hasPointer,
});

provide(appRootInjectionKey, {
  appRoot: appRootRef,
  portalRoot: portalRootRef,
  embedded: props.mode === "embedded",
  mode: props.mode,
  disablePortal: props.disablePortal,
  layout: props.layout,
  keyboardInput: isKeyboardInputActive,
});

watchEffect(
  (onCleanup) => {
    const parentElement = appRootRef.value!.parentElement!;
    const documentElement = document.documentElement;

    const [baseClassNames, stylesClassNames] = getClassNamesByMode({
      mode: props.mode,
      layout: props.layout,
      tokensClassName: tokensClassName,
      sizeX: sizeX,
      sizeY: sizeY,
    });

    switch (props.mode) {
      case "full":
        parentElement.classList.add(...baseClassNames);
        documentElement.classList.add(...stylesClassNames, "vkui");
        const unsetSafeAreaInsets = setSafeAreaInsets(
          props.safeAreaInsets,
          documentElement
        );

        onCleanup(() => {
          parentElement.classList.remove(...baseClassNames);
          documentElement.classList.remove(...stylesClassNames, "vkui");
          unsetSafeAreaInsets();
        });

        break;
      case "embedded":
        if (parentElement) {
          parentElement.classList.add(...baseClassNames, ...stylesClassNames);

          if (!props.disableParentTransformForPositionFixedElements) {
            parentElement.style.setProperty(
              "transform",
              "translate3d(0, 0, 0)"
            );
          }

          const unsetSafeAreaInsets = setSafeAreaInsets(
            props.safeAreaInsets,
            parentElement,
            portalRootRef.value
          );

          onCleanup(() => {
            parentElement.classList.remove(
              ...baseClassNames,
              ...stylesClassNames
            );

            if (!props.disableParentTransformForPositionFixedElements) {
              parentElement.style.removeProperty("transform");
            }

            unsetSafeAreaInsets();
          });
        }
        break;
      case "partial":
        break;
    }
  },
  { flush: "post" }
);
</script>
