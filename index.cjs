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
      .readdirSync(path.join(__dirname, dirname), { withFileTypes: true })
      .filter(entry => entry.isFile())
      .map(({ name }) => [
        path.basename(name, path.extname(name)),
        require(path.resolve(__dirname, dirname, name)),
      ]),
  )
}
