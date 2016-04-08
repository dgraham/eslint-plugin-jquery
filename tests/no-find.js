'use strict';

const rule = require('../rules/no-find')
const RuleTester = require('eslint').RuleTester

const error = '$.find is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-find', rule, {
  valid: [
    'find()',
    '[].find()',
    'div.find()',
    'div.find'
  ],
  invalid: [
    {
      code: '$("div").find()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.find()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().find()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").find())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
