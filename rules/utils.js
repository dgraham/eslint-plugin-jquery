'use strict';

function traverse(node) {
  while (node) {
    switch (node.type) {
      case 'CallExpression':
        node = node.callee
        break
      case 'MemberExpression':
        node = node.object
        break
      case 'Identifier':
        return node
      default:
        return null
    }
  }
}

function isjQuery(node) {
  const id = traverse(node)
  return id && id.name.startsWith('$')
}

module.exports = {
  traverse: traverse,
  isjQuery: isjQuery
}
