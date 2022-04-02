import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

const packageConfig = {
  name: "@ultirequiem/random-item",
  repoName: "random_item",
  version: "1.0.1",
  description: "Get a random item from an array",
  keywords: ["random", "array"],
  license: "MIT",
  homepage: "https://random-item.js.org",
} as const;

buildPackage({
  repoName: "random_item",
  name: "@ultirequiem/random-item",
  description: "Get a random item from an array.",
  homepage: "https://random-item.js.org",
  keywords: ["random", "array"],
});

await build({
  entryPoints: ["./mod.ts"],

  outDir: "./node",

  shims: {
    deno: true,
  },

  package: {
    name: packageConfig.name,
    description: packageConfig.description,

    version: packageConfig.version,

    license: packageConfig.license,

    funding: {
      type: "patreon",
      url: `https://www.patreon.com/${publisher.username}`,
    },

    repository: `github:${publisher.username}/${packageConfig.repoName}`,
    homepage: packageConfig.homepage,

    bugs: {
      url:
        `https://github.com/${publisher.username}/${packageConfig.repoName}/issues`,
      email: publisher.email,
    },

    keywords: packageConfig.keywords,
  },
});

Deno.copyFileSync("license", "node/LICENSE");
Deno.copyFileSync("readme.md", "node/README.md");
