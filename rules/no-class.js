'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  const forbidden = ['addClass', 'removeClass', 'toggleClass']

  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (forbidden.indexOf(node.callee.property.name) === -1) return

      const id = utils.traverse(node)
      if (id && id.name.startsWith('$')) {
        context.report({
          node: node,
          message: '$.' + node.callee.property.name + ' is not allowed'
        })
      }
    }
  }
}

module.exports.schema = []
