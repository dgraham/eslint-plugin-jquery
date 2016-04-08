'use strict';

const rule = require('../rules/no-ajax')
const RuleTester = require('eslint').RuleTester

const ajaxError = '$.ajax is not allowed'
const getError = '$.get is not allowed'
const jsonError = '$.getJSON is not allowed'
const scriptError = '$.getScript is not allowed'
const postError = '$.post is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-ajax', rule, {
  valid: [
    'ajax()',
    'div.ajax()',
    'div.ajax',

    'get()',
    'div.get()',
    'div.get',

    'getJSON()',
    'div.getJSON()',
    'div.getJSON',

    'getScript()',
    'div.getScript()',
    'div.getScript',

    'post()',
    'div.post()',
    'div.post'
  ],
  invalid: [
    {
      code: '$.ajax()',
      errors: [{message: ajaxError, type: 'CallExpression'}]
    },
    {
      code: '$.get()',
      errors: [{message: getError, type: 'CallExpression'}]
    },
    {
      code: '$.getJSON()',
      errors: [{message: jsonError, type: 'CallExpression'}]
    },
    {
      code: '$.getScript()',
      errors: [{message: scriptError, type: 'CallExpression'}]
    },
    {
      code: '$.post()',
      errors: [{message: postError, type: 'CallExpression'}]
    }
  ]
})
