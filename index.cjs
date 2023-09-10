const fs = require('node:fs')
const path = require('node:path')

const { name, version } = require('./package.json')

module.exports.PLUGIN_NAME = name.replace(/^eslint-plugin-/, '')

/** @type {import('eslint').ESLint.Plugin['meta']} */
module.exports.meta = {
  name,
  version,
}

module.exports.rules = loadChildren('rules')
module.exports.configs = loadChildren('configs')

/** @param {string} dirname */
function loadChildren(dirname) {
  return Object.fromEntries(
    fs
      .readdirSync(dirname, { withFileTypes: true })
      .flatMap(entry =>
        entry.isFile()
          ? [
              [
                path.basename(entry.name, path.extname(entry.name)),
                require(path.resolve(entry.path, entry.name)),
              ],
            ]
          : [],
      ),
  )
}
