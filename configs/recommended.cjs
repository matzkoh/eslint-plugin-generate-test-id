const { PLUGIN_NAME } = require('..')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [PLUGIN_NAME],
  rules: {
    [`${PLUGIN_NAME}/jsx`]: 'warn',
  },
}
