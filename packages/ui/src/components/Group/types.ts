import type { HTMLAttributes } from "vue";

export type GroupMode = "plain" | "card" | "none";

export interface GroupContainerProps extends /* @vue-ignore */ HTMLAttributes {
  /**
    `show` (только для `mode="plain"`) - разделитель всегда показывается
    `hide` - разделитель всегда спрятан,
    `auto` - разделитель рисуется автоматически между соседними группами.
   */
  separator?: "show" | "hide" | "auto";
  /**
   * Режим отображения. Если установлен `card`, выглядит как карточка c
   * обводкой и внешними отступами. Если `plain` — без отступов и обводки.
   * По умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)
   * В модальных окнах по умолчанию `plain`.
   */
  mode?: "plain" | "card";
  /**
   * Отвечает за отступы вокруг контента в режиме `card`.
   */
  padding?: "s" | "m";
}

export interface GroupProps extends GroupContainerProps {}
