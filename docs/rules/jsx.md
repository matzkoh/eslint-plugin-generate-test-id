# Fill empty data-test-id attributes with nanoid (`generate-test-id/jsx`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

## Options

```json
{
  "generate-test-id/jsx": ["error", { "attributes": "data-test-id" }]
}
```

```json
{
  "generate-test-id/jsx": ["error", { "attributes": ["data-test-id", "data-qa-id"], "length": 16 }]
}
```

- `attributes` - An array of attribute names or an attribute name, filled with generated id. Default is `['data-test-id']`.
- `length` - The length of the generated id value. Defaults to `8`.
