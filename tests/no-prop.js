'use strict';

const rule = require('../rules/no-prop')
const RuleTester = require('eslint').RuleTester

const error = '$.prop is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-prop', rule, {
  valid: [
    'prop()',
    '[].prop()',
    'div.prop()',
    'div.prop'
  ],
  invalid: [
    {
      code: '$("div").prop()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.prop()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().prop()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").prop())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
