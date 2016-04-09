'use strict';

const rule = require('../rules/no-attr')
const RuleTester = require('eslint').RuleTester

const error = '$.attr is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-attr', rule, {
  valid: [
    'attr()',
    '[].attr()',
    'div.attr()',
    'div.attr'
  ],
  invalid: [
    {
      code: '$("div").attr()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.attr()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().attr()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").attr())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
