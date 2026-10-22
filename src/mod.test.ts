import { describe, expect, it } from "vitest";
import { stableFunction } from "@ultirequiem/stable-fn";

import { randomItem, randomMultipleItems } from "./index.js";

const fixture = ["a", "b", "c", "d", "e"] as const;

it("[randomItem] Is not an stable function.", () => {
  expect(!stableFunction(() => randomItem(fixture))).toBeTruthy();

  for (let i = 0; i < 100; i++) {
    const item = randomItem(fixture);

    expect(typeof item).toEqual("string");

    expect(fixture.includes(item)).toBeTruthy();
  }
});

it("[randomItem] Argument validation", () => {
  // @ts-ignore: It should throw.
  expect(() => randomItem("hey")).toThrow(TypeError);

  // @ts-ignore: It should throw.
  expect(() => randomItem(456)).toThrow(TypeError);

  // @ts-ignore: It should throw.
  expect(() => randomItem(Error)).toThrow(TypeError);
});

it("[randomMultipleItems] Is not an stable function.", () => {
  expect(!stableFunction(() => randomMultipleItems(fixture, 3))).toBeTruthy();

  for (let i = 0; i < 100; i++) {
    const items = randomMultipleItems(fixture, 3);

    items.forEach((item) => {
      expect(typeof item).toEqual("string");

      expect(fixture.includes(item)).toBeTruthy();
    });
  }
});

describe("[randomMultipleItems] Argument validation", () => {
  it("Array", () => {
    expect(
      // @ts-ignore: It should throw.
      () => randomMultipleItems("hey", 34),
    ).toThrow(TypeError);

    expect(
      // @ts-ignore: It should throw.
      () => randomMultipleItems(34, 456),
    ).toThrow(TypeError);

    expect(
      // @ts-ignore: It should throw.
      () => randomMultipleItems(Error, 4),
    ).toThrow(TypeError);
  });

  it("Length", () => {
    expect(
      // @ts-ignore: It should throw.
      () => randomMultipleItems("34", "hey"),
    ).toThrow(TypeError);

    expect(() => randomMultipleItems(fixture, -1)).toThrow(TypeError);
  });
});

it("[randomItem] Support iterables.", () => {
  expect(!stableFunction(() => randomItem([...new Set(fixture)]))).toBeTruthy();

  for (let i = 0; i < 100; i++) {
    const item = randomItem(fixture);

    expect(typeof item).toEqual("string");

    expect(fixture.includes(item)).toBeTruthy();
  }
});
