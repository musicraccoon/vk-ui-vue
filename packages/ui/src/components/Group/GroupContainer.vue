<template>
  <RootComponent
    as="section"
    :tabindex="tabIndex"
    :class="[
      'vkuiInternalGroup',
      $style['Group'],
      sizeXClassNames[sizeX],
      mode === 'plain' &&
        isInsideModal &&
        $style['Group--mode-plain-inside-modal'],
      stylesMode[mode],
      stylesPadding[padding],
    ]"
  >
    <slot />

    <div
      v-if="separator === 'auto'"
      :class="$style['Group__separator-sibling']"
    ></div>
    <div
      v-else-if="separator === 'show'"
      :class="[
        $style['Group__separator-sibling'],
        (mode === 'plain' || mode === 'none') &&
          $style['Group__separator-sibling--forced'],
      ]"
    ></div>
  </RootComponent>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
import { useAdaptivity } from "../../composables/useAdaptivity";
import RootComponent from "../RootComponent/RootComponent.vue";
import type { GroupContainerProps } from "./types";
import { useGroupMode } from "./useGroupMode";

const props = withDefaults(defineProps<GroupContainerProps>(), {
  separator: "auto",
  padding: "m",
});

const $style = useCssModule();

const sizeXClassNames = {
  none: [$style["Group--sizeX-none"], "vkuiInternalGroup--sizeX-none"],
  regular: $style["Group--sizeX-regular"],
  compact: $style["Group--sizeX-compact"],
};
const stylesMode = {
  none: [$style["Group--mode-none"], "vkuiInternalGroup--mode-none"],
  plain: [$style["Group--mode-plain"], "vkuiInternalGroup--mode-plain"],
  card: [$style["Group--mode-card"], "vkuiInternalGroup--mode-card"],
};
const stylesPadding = {
  s: $style["Group--padding-s"],
  m: $style["Group--padding-m"],
};

// TODO: Добавить получение контекста модального окна
// const { isInsideModal } = React.useContext(ModalRootContext);
const isInsideModal = false;
const { sizeX = "none" } = useAdaptivity().value;

const mode = useGroupMode({ forceMode: props.mode, sizeX, isInsideModal });

const isTabPanel = props.role === "tabpanel";

if (
  process.env.NODE_ENV === "development" &&
  isTabPanel &&
  (!props["aria-controls"] || !props["id"])
) {
  // TODO: Заменить log на warn (Функция логирования вк)
  console.log(
    'При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"'
  );
}

const tabIndex =
  isTabPanel && props.tabindex === undefined ? 0 : props.tabindex;
</script>

<style src="./Group.module.css" module scoped></style>
