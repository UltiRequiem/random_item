# random_item

Get a random item from an array

[![npm](https://img.shields.io/npm/v/@ultirequiem/random-item?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/random-item)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/random-item?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/random-item)
[![CI](https://github.com/UltiRequiem/random_item/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/random_item/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/random_item/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/random_item)

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```typescript
import {
  randomItem,
  randomMultipleItems,
} from "@ultirequiem/random-item";

randomItem(["🐴", "🦄", "🌈"]); //=> '🦄'

randomMultipleItems(["🐴", "🦄", "🌈"], 2); //=> ['🌈', '🦄']

randomItem([...new Set(["🐴", "🦄", "🌈"])]); //=> '🌈'
```

## Support

Open an Issue, I will check it as soon as possible 👀

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
