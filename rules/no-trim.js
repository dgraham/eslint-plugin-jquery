'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'trim') return

      context.report({
        node: node,
        message: 'Prefer String#trim to $.trim'
      })
    }
  }
}

module.exports.schema = []
