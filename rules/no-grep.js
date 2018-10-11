'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'grep') return

      context.report({
        node: node,
        message: 'Prefer Array#filter to $.grep'
      })
    }
  }
}

module.exports.schema = []
