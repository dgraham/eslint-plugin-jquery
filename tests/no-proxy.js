'use strict';

const rule = require('../rules/no-proxy')
const RuleTester = require('eslint').RuleTester

const error = '$.proxy is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-proxy', rule, {
  valid: [
    'proxy()',
    '"test".proxy()',
    '"test".proxy'
  ],
  invalid: [
    {
      code: '$.proxy()',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
