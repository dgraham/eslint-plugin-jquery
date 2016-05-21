'use strict';

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$' && node.callee.object.name !== 'jQuery') return
      if (node.callee.property.name !== 'proxy') return

      context.report({
        node: node,
        message: 'Prefer fn.bind over $.proxy'
      })
    }
  }
}

module.exports.schema = []
