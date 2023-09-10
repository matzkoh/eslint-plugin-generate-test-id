import { mock } from 'node:test'

import { RuleTester } from 'eslint'

import * as rule from '../../rules/jsx.cjs'
import id from '../../rules/lib/id.cjs'

mock.method(id, 'init', length => () => '-'.repeat(length))

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
})

ruleTester.run('jsx', rule, {
  valid: [
    '<Component data-test-id="foo" />',
    '<Component data-test-id="foo">text</Component>',
    '<Component data-test-id={bar} />',
    '<Component {...props} />',
  ],
  invalid: [
    {
      code: '<Component data-test-id />',
      output: '<Component data-test-id="--------" />',
      errors: [{ message: 'data-test-id attribute should be filled' }],
    },
    {
      code: '<Component data-test-id>text</Component>',
      output: '<Component data-test-id="--------">text</Component>',
      errors: [{ message: 'data-test-id attribute should be filled' }],
    },
    {
      code: '<Component data-test-id="" />',
      output: '<Component data-test-id="--------" />',
      errors: [{ message: 'data-test-id attribute should be filled' }],
    },
    {
      code: '<Component data-foo />',
      output: '<Component data-foo="--------" />',
      options: [{ attributes: ['data-foo'] }],
      errors: [{ message: 'data-foo attribute should be filled' }],
    },
    {
      code: '<Component data-foo data-bar other />',
      output: '<Component data-foo="--------" data-bar="--------" other />',
      options: [{ attributes: ['data-foo', 'data-bar', 'data-baz'] }],
      errors: [
        { message: 'data-foo attribute should be filled' },
        { message: 'data-bar attribute should be filled' },
      ],
    },
    {
      code: '<Component data-test-id />',
      output: '<Component data-test-id="----" />',
      options: [{ length: 4 }],
      errors: 1,
    },
    {
      code: '<Component data-test-id />',
      output: '<Component data-test-id="------------" />',
      options: [{ length: 12 }],
      errors: 1,
    },
  ],
})
