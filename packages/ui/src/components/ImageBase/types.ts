import type { CSSProperties, VNode } from "vue";
import type { LiteralUnion } from "../../types";

export const imageBaseSizes = [
  16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96,
] as const;

export type ImageBaseSize = (typeof imageBaseSizes)[number];

export type ImageBaseExpectedIconProps = {
  width?: number;
  height?: number;
};

export interface ImageBaseContextProps {
  size: ImageBaseSize | number;
}

export interface ImageBaseProps {
  /**
   * Задаёт размер картинки.
   *
   * Используйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.
   *
   * > ⚠️ Использование кастомного размера – это пограничный кейс.
   */
  size?: LiteralUnion<ImageBaseSize, number>;
  /**
   * Ширина изображения
   */
  width?: number;
  /**
   * Высота изображения
   */
  height?: number;
  /**
   * Отключает обводку.
   */
  noBorder?: boolean;
  /**
   * Фолбек на случай, если картинка не прогрузилась.
   *
   * > 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.
   *
   * > Предпочтительней использовать иконки из `@vkontakte/icons`.
   *
   * > 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же
   * > чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы
   * > использовали иконку.
   *
   * > ⚠️ Может перекрывать `children`.
   */
  fallbackIcon?: VNode;
  /**
   * Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.
   * @since 5.10.0
   */
  withTransparentBackground?: boolean;
  /**
   * Пользовательское значения стиля object-fit
   * Подробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-fit)
   */
  objectFit?: CSSProperties["object-fit"];
  /**
   * Флаг для сохранения пропорций картинки.
   * Для корректной работы необходимо задать размеры хотя бы одной стороны картинки
   */
  keepAspectRatio?: boolean;
}
