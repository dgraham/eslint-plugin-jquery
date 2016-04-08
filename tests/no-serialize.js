'use strict';

const rule = require('../rules/no-serialize')
const RuleTester = require('eslint').RuleTester

const serializeError = '$.serialize is not allowed'
const arrayError = '$.serializeArray is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-serialize', rule, {
  valid: [
    'serialize()',
    '[].serialize()',
    'div.serialize()',
    'div.serialize',

    'serializeArray()',
    '[].serializeArray()',
    'div.serializeArray()',
    'div.serializeArray'
  ],
  invalid: [
    {
      code: '$("div").serialize()',
      errors: [{message: serializeError, type: 'CallExpression'}]
    },
    {
      code: '$div.serialize()',
      errors: [{message: serializeError, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().serialize()',
      errors: [{message: serializeError, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").serialize())',
      errors: [{message: serializeError, type: 'CallExpression'}]
    },
    {
      code: '$("div").serializeArray()',
      errors: [{message: arrayError, type: 'CallExpression'}]
    },
    {
      code: '$div.serializeArray()',
      errors: [{message: arrayError, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().serializeArray()',
      errors: [{message: arrayError, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").serializeArray())',
      errors: [{message: arrayError, type: 'CallExpression'}]
    }
  ]
})
