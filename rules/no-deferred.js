'use strict'

module.exports = function(context) {
  function enforce(node) {
    if (node.callee.type !== 'MemberExpression') return
    if (node.callee.object.name !== '$') return
    if (node.callee.property.name !== 'Deferred') return

    context.report({
      node: node,
      message: 'Prefer Promise to $.Deferred'
    })
  }

  return {
    CallExpression: enforce,
    NewExpression: enforce
  }
}

module.exports.schema = []
