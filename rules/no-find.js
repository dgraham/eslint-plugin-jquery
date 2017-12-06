'use strict'

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'find') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer querySelectorAll to $.find'
        })
      }
    }
  }
}

module.exports.schema = []
