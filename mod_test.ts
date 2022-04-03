import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.133.0/testing/asserts.ts";
import { stableFunction } from "https://deno.land/x/stable_fn@v1.0.0/mod.ts";

import { randomItem, randomMultipleItems } from "./mod.ts";

const fixture = ["a", "b", "c", "d", "e"] as const;

Deno.test("[randomItem] Is not an stable function.", () => {
  assert(!stableFunction(() => randomItem(fixture)));

  for (let i = 0; i < 100; i++) {
    const item = randomItem(fixture);

    assertEquals(typeof item, "string");

    assert(fixture.includes(item));
  }
});

Deno.test("[randomItem] Argument validation", () => {
  // @ts-ignore: It should throw.
  assertThrows(() => randomItem("hey"), TypeError, "Expected an array.");

  // @ts-ignore: It should throw.
  assertThrows(() => randomItem(456), TypeError, "Expected an array.");

  // @ts-ignore: It should throw.
  assertThrows(() => randomItem(Error), TypeError, "Expected an array.");
});

Deno.test("[randomMultipleItems] Is not an stable function.", () => {
  assert(!stableFunction(() => randomMultipleItems(fixture, 3)));

  for (let i = 0; i < 100; i++) {
    const items = randomMultipleItems(fixture, 3);

    items.forEach((item) => {
      assertEquals(typeof item, "string");

      assert(fixture.includes(item));
    });
  }
});

Deno.test("[randomMultipleItems] Argument validation", async (t) => {
  await t.step("Array", () => {
    assertThrows(
      // @ts-ignore: It should throw.
      () => randomMultipleItems("hey", 34),
      TypeError,
      "Expected an array.",
    );

    assertThrows(
      // @ts-ignore: It should throw.
      () => randomMultipleItems(34, 456),
      TypeError,
      "Expected an array.",
    );

    assertThrows(
      // @ts-ignore: It should throw.
      () => randomMultipleItems(Error, 4),
      TypeError,
      "Expected an array.",
    );
  });

  await t.step("Length", () => {
    assertThrows(
      // @ts-ignore: It should throw.
      () => randomMultipleItems("34", "hey"),
      TypeError,
      "Expected a number.",
    );

    assertThrows(
      () => randomMultipleItems(fixture, -1),
      RangeError,
      "Expected a positive number.",
    );
  });
});

Deno.test("[randomItem] Support iterables.", () => {
  assert(!stableFunction(() => randomItem([...new Set(fixture)])));

  for (let i = 0; i < 100; i++) {
    const item = randomItem(fixture);

    assertEquals(typeof item, "string");

    assert(fixture.includes(item));
  }
});
