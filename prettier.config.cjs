/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: 'package.json',
      options: {
        plugins: ['prettier-plugin-packagejson'],
      },
    },
    {
      files: '*.{md,yaml,yml}',
      options: {
        semi: true,
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
}
