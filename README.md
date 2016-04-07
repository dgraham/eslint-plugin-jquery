# eslint-plugin-jquery

Disallow jQuery functions with native equivalents.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-jquery`:

```
$ npm install eslint-plugin-jquery --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery` globally.

## Usage

Add `jquery` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "jquery"
  ],
  "rules": {
    "jquery/no-each": 2,
    "jquery/no-trim": 2,
    "jquery/no-val": 2
  }
}
```

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
