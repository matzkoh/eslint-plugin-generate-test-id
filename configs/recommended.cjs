const plugin = require('..')

const { PLUGIN_NAME, rules } = plugin

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    [PLUGIN_NAME]: plugin,
  },
  rules,
}
