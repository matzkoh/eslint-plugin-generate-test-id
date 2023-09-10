/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:import/recommended',
    'plugin:eslint-plugin/all',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    curly: 'error',
    eqeqeq: 'error',
    'eslint-plugin/require-meta-docs-url': [
      'error',
      {
        pattern:
          'https://github.com/matzkoh/eslint-plugin-generate-test-id/tree/HEAD/docs/rules/{{name}}.md',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', orderImportKind: 'asc', caseInsensitive: true },
      },
    ],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': [
      process.env.CI ? 'error' : 'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: '*' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: 'multiline-expression', next: 'expression' },
      { blankLine: 'any', prev: '*', next: 'expression' },
      { blankLine: 'any', prev: 'singleline-const', next: 'const' },
      { blankLine: 'any', prev: 'singleline-let', next: 'let' },
      { blankLine: 'any', prev: 'singleline-var', next: 'var' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'any', prev: 'cjs-export', next: 'cjs-export' },
      { blankLine: 'any', prev: 'case', next: ['case', 'default'] },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-keyword-prefix': ['error', { checkProperties: false }],
    'unicorn/prevent-abbreviations': 'off',
  },
}
