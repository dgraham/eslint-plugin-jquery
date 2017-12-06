'use strict'

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'val') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer value to $.val'
        })
      }
    }
  }
}

module.exports.schema = []
