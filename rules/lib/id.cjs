const { customAlphabet } = require('nanoid')

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

module.exports.init = customAlphabet.bind(undefined, alphabet)
