import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node_support.ts";

buildPackage(
  {
    repoName: "random_item",
    name: "@ultirequiem/random-item",
    description: "Get a random item from an array.",
    homepage: "https://random-item.js.org",
    keywords: ["random", "array"],
    license: "MIT",
    version: "1.2.0",
  },
  {
    check: false,
    supportCJS: false,
    entryPoints: [
      "./mod.ts",
      { name: "random_item", path: "./random_item.ts", kind: "bin" },
    ],
  },
);
