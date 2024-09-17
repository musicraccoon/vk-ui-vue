export interface Version {
  major: number;
  minor?: number;
  patch?: number;
}

interface Nothing {}

/**
 * Автозаполнение для типов
 *
 * @example
 * LiteralUnion<'foo' | 'bar', string>
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/29729}
 */
export type LiteralUnion<Union, Type> = Union | (Type & Nothing);
