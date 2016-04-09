'use strict';

const rule = require('../rules/no-css')
const RuleTester = require('eslint').RuleTester

const error = '$.css is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-css', rule, {
  valid: [
    'css()',
    '[].css()',
    'div.css()',
    'div.css'
  ],
  invalid: [
    {
      code: '$("div").css()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.css()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().css()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").css())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
