'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'globalEval') return

      context.report({
        node: node,
        message: '$.globalEval is not allowed'
      })
    }
  }
}

module.exports.schema = []
