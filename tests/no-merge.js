'use strict';

const rule = require('../rules/no-merge')
const RuleTester = require('eslint').RuleTester

const error = '$.merge is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-merge', rule, {
  valid: [
    'merge()',
    '"test".merge()',
    '"test".merge'
  ],
  invalid: [
    {
      code: '$.merge()',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
