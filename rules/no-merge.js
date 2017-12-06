'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'merge') return

      context.report({
        node: node,
        message: 'Prefer Array#concat to $.merge'
      })
    }
  }
}

module.exports.schema = []
