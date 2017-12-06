'use strict'

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'parent') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer parentElement to $.parent'
        })
      }
    }
  }
}

module.exports.schema = []
