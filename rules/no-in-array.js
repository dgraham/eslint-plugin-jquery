'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'inArray') return

      context.report({
        node: node,
        message: 'Prefer Array#indexOf to $.inArray'
      })
    }
  }
}

module.exports.schema = []
