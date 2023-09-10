/** @typedef {import('eslint').Rule.RuleModule} RuleModule */

/**
 * @typedef Options
 * @property {string | string[] | undefined} attributes
 * @property {number | undefined} length
 */

/** @type {Options} */
const defaultOptions = Object.freeze({
  attributes: ['data-test-id', 'data-testid'],
  length: 8,
})

/** @type {RuleModule['schema']} */
const schema = [
  {
    type: 'object',
    properties: {
      attributes: {
        oneOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        default: ['data-test-id', 'data-testid'],
      },
      length: {
        type: 'integer',
        minimum: 1,
        default: 8,
      },
    },
    additionalProperties: false,
  },
]

/** @type {RuleModule['meta']} */
module.exports.meta = {
  type: 'problem',
  docs: {
    description: 'Fill empty data-test-id attributes with nanoid',
    recommended: true,
    url: 'https://github.com/matzkoh/eslint-plugin-generate-test-id/tree/HEAD/docs/rules/jsx.md',
  },
  fixable: 'code',
  schema,
}

/** @type {RuleModule['create']} */
module.exports.create = context => {
  /** @type {Options} */
  const options = Object.assign({}, defaultOptions, ...context.options)
  const attributes = new Set([options.attributes].flat())

  const { init } = require('./lib/id.cjs')
  const generateId = init(options.length)

  return {
    /** @param {import('@typescript-eslint/types/dist').TSESTree.JSXOpeningElement} el */
    JSXOpeningElement: el => {
      for (const { type, name, value } of el.attributes) {
        if (
          type === 'JSXAttribute' &&
          name.type === 'JSXIdentifier' &&
          attributes.has(name.name) &&
          (!value || (value.type === 'Literal' && !value.value))
        ) {
          context.report({
            node: name,
            message: `${name.name} attribute should be filled`,
            fix: fixer =>
              value
                ? fixer.replaceText(value, `"${generateId()}"`)
                : fixer.insertTextAfter(name, `="${generateId()}"`),
          })
        }
      }
    },
  }
}
