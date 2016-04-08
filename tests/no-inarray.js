'use strict';

const rule = require('../rules/no-inarray')
const RuleTester = require('eslint').RuleTester

const error = '$.inArray is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-inarray', rule, {
  valid: [
    'inArray()',
    '"test".inArray()',
    '"test".inArray'
  ],
  invalid: [
    {
      code: '$.inArray()',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
