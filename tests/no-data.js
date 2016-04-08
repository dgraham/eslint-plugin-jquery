'use strict';

const rule = require('../rules/no-data')
const RuleTester = require('eslint').RuleTester

const error = '$.data is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-data', rule, {
  valid: [
    'data()',
    '[].data()',
    'div.data()',
    'div.data'
  ],
  invalid: [
    {
      code: '$("div").data()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.data()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().data()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").data())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
