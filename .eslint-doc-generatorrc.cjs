const prettier = require('prettier')

/** @type {import('eslint-doc-generator').GenerateOptions} */
module.exports = {
  postprocess: async (content, filepath) => {
    const configFile = await prettier.resolveConfigFile()
    const config = require(configFile)
    const resolvedConfig = await prettier.resolveConfig(filepath, config)

    return prettier.format(content, {
      ...resolvedConfig,
      filepath,
    })
  },
}
