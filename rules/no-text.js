'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'text') return

      const id = utils.traverse(node)
      if (id && id.name.startsWith('$')) {
        context.report({
          node: node,
          message: '$.text is not allowed'
        })
      }
    }
  }
}

module.exports.schema = []
