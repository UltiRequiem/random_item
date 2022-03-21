/**
 * Get a random item from an array.
 *
 * @example
 * ```javascript
 * import { randomItem } from "https://deno.land/x/random_item/mod.ts";
 * randomItem(['🐴', '🦄', '🌈']); //=> '🦄'
 * ```
 */
export function randomItem<T>(array: T[]): T {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get multiple random items from an array.
 * This is the equivalent of calling `randomItem()` multiple times so the returned array may contain duplicates.
 *
 * @example
 * ```javascript
 * import { randomMultipleItems } from "https://deno.land/x/random_item/mod.ts";
 * randomMultipleItems(['🐴', '🦄', '🌈'], 2); /=> ['🌈', '🦄']
 * ```
 */
export function randomMultipleItems<T>(array: T[], length: number): T[] {
  if (!Number.isInteger(length)) {
    throw new TypeError(`Expected an number.`);
  }

  if (!(length >= 0)) {
    throw new RangeError(`Expected a positive number.`);
  }

  return Array.from({ length }).map(() => randomItem(array));
}
