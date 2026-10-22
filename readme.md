# random_item

[![codecov](https://codecov.io/gh/ultirequiem/random_item/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/random_item)

Get a random item from an array

## Usage

The API is the same on all this platforms ✔️

### [Node.js 🐢🚀](https://npmjs.com/package/random-item)

```typescript
import {
  randomItem,
  randomMultipleItems,
} from "random-item";

randomItem(["🐴", "🦄", "🌈"]); //=> '🦄'

randomMultipleItems(["🐴", "🦄", "🌈"], 2); //=> ['🌈', '🦄']

randomItem([...new Set(["🐴", "🦄", "🌈"])]); //=> '🌈'
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/random-item) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-item)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/random_item/mod.ts) 📚

## CLI

### Install

- **Deno 🎃**

```sh
deno install https://deno.land/x/random_item/random_item.ts
```

- **Node.js 🐼**

```sh
npm install -g @ultirequiem/random-item
```

### Usage

```sh
random_item --help
```

[A binary for multiple platforms is provided too!](https://github.com/UltiRequiem/random-item/releases/latest)

[Video Showcase](https://youtu.be/LnQduW2ongY)

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/random_item/tags) 🏷️

## Authors

[Eliaz Bobadilla (a.k.a UltiRequiem)](https://ultirequiem.com) - Creator and
Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/random_item/contributors) who
participated in this project ✨

## Licence

Licensed under the MIT License 📄
