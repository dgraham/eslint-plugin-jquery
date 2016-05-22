'use strict';

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'proxy') return

      context.report({
        node: node,
        message: '$.proxy is not allowed'
      })
    }
  }
}

module.exports.schema = []
