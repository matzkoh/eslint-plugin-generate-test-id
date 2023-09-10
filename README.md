[![npm-badge]][npm]
[![downloads-badge]][npm]
[![actions-badge]][actions]
[![renovate-badge]][renovate]
[![codecov-badge]][codecov]

[npm-badge]: https://img.shields.io/npm/v/eslint-plugin-generate-test-id
[npm]: https://www.npmjs.com/package/eslint-plugin-generate-test-id
[downloads-badge]: https://img.shields.io/npm/dw/eslint-plugin-generate-test-id?color=blue
[actions-badge]: https://github.com/matzkoh/eslint-plugin-generate-test-id/actions/workflows/release.yml/badge.svg
[actions]: https://github.com/matzkoh/eslint-plugin-generate-test-id/actions/workflows/release.yml
[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen
[renovate]: https://renovatebot.com/
[codecov-badge]: https://codecov.io/gh/matzkoh/eslint-plugin-generate-test-id/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/matzkoh/eslint-plugin-generate-test-id

# eslint-plugin-generate-test-id

Fill empty data-test-id attributes with nanoid.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-generate-test-id`:

```sh
npm install eslint-plugin-generate-test-id --save-dev
```

## Usage

### <a name='eslintrc'></a>**[.eslintrc.json](https://eslint.org/docs/latest/use/configure/configuration-files)**

```json
{
  "extends": ["plugin:generate-test-id/recommended"]
}
```

### <a name='flat'></a>[`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (requires eslint>=v8.23.0)

```js
const generateTestIdJsx = require("eslint-plugin-eslint-plugin/configs/recommended");

module.exports = [generateTestIdJsx];
```

## Rules

<!-- begin auto-generated rules list -->

⚠️ Configurations set to warn in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                     | Description                                    | ⚠️  | 🔧  |
| :----------------------- | :--------------------------------------------- | :-- | :-- |
| [jsx](docs/rules/jsx.md) | Fill empty data-test-id attributes with nanoid | ✅  | 🔧  |

<!-- end auto-generated rules list -->

## Preset configs

### Recommended config

```json
{
  "extends": ["plugin:generate-test-id/recommended"]
}
```
