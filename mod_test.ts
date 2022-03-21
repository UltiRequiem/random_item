import {
  assert,
  assertThrows,
} from "https://deno.land/std@0.130.0/testing/asserts.ts";
import stableFunction from "https://deno.land/x/stable_fn@v0.0.1/mod.js";
import { randomItem, randomMultipleItems } from "./mod.ts";

const fixture = ["a", "b", "c", "d", "e"];

Deno.test("[randomItem] Is not an stable function.", () => {
  assert(!stableFunction(() => randomItem(fixture)));
});

Deno.test("[randomItem] Argument validation", async (t) => {
  await t.step("Incorrect Input", () => {
    // @ts-ignore: It should throw.
    assertThrows(() => randomItem("hey"));
    // @ts-ignore: It should throw.
    assertThrows(() => randomItem(456));
  });
});

Deno.test("[randomMultipleItems] Is not an stable function.", () => {
  assert(!stableFunction(() => randomMultipleItems(fixture, 3)));
});

Deno.test("[randomMultipleItems] Argument validation", async (t) => {
  await t.step("Negative Number", () => {
    assertThrows(() => randomMultipleItems(fixture, -1));
  });
});
