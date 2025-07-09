import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

/**
 * Get a random item from an array.
 *
 * @example
 * ```javascript
 * randomItem(['a', 'b', 'c']); //=> 'c'
 * ```
 */
export function randomItem<T>(array: readonly T[]): T {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  return array[randomNumber({ min: 0, max: array.length - 1 })];
}

/**
 * Get multiple random items from an array.
 * This is the equivalent of calling `randomItem()` multiple times so
 * the returned array may contain duplicates.
 *
 * @example
 * ```javascript
 * randomMultipleItems(['a', 'b', 'c'], 2); /=> ['a', 'c']
 * ```
 */
export function randomMultipleItems<T>(
  array: readonly T[],
  length: number,
): T[] {
  if (!(Number.isInteger(length) && length >= 0)) {
    throw new TypeError("Expected a positive number.");
  }

  return Array.from({ length }, () => randomItem(array));
}
