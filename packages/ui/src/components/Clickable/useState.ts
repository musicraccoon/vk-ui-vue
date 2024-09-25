export interface StateProps {
  /**
   * Указывает, должен ли компонент реагировать на hover-состояние
   */
  hasHover?: boolean;
  /**
   * Позволяет управлять hovered-состоянием извне
   */
  hovered?: boolean;
  /**
   * Позволяет управлять activated-состоянием извне
   */
  activated?: boolean;
  /**
   * Указывает, должен ли компонент реагировать на active-состояние
   */
  hasActive?: boolean;

  /**
   * Позволяет родительскому компоненту
   * иметь hovered-cостояние при наведении
   * на любой дочерний элемент.
   * По умолчанию состояние hovered у родителя сбрасывается.
   *
   * Присваивается родителькому компоненту.
   */
  hasHoverWithChildren?: boolean;

  /**
   * Позволяет родительскому компоненту показывать hovered-состояние при наведении
   * на текущий дочерний компонент.
   *
   * Присваивается дочернему компоненту.
   */
  unlockParentHover?: boolean;

  /**
   * Длительность показа `activated`-состояния
   */
  activeEffectDelay?: number;

  /**
   * Стиль подсветки active-состояния
   */
  activeClassName?: string;

  /**
   * Стиль подсветки hover-состояния
   */
  hoverClassName?: string;
}

export const DEFAULT_ACTIVE_EFFECT_DELAY = 600;

const ACTIVE_DELAY = 70;
