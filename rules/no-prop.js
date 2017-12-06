'use strict'

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'prop') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer direct property access to $.prop'
        })
      }
    }
  }
}

module.exports.schema = []
