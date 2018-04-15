# element-query-tests

JavaScript tests for element query conditions provided as a JS module.

## Usage

These functions are provided in two formats:

- commonjs module: [index.js](index.js)
- vanilla JS module: [index.vanilla.js](index.vanilla.js)

### As a CommonJS Module

If you are using Node or other tools that can load commonjs modules you will want to use the [index.js](index.js) version of the library. The simplest way to get started is to require this module in another module with `require()` like this:

```js
let elementQuery = require('../index.js')
```

An example of this can be found in [tests/cjs-test.js](tests/cjs-test.js)

### As a Vanilla JS Module

If you are using vanilla JS modules you will want to use the [index.vanilla.js](index.vanilla.js) version of the library. The simplest way to get started is to `import` this module into another module like this:

```js
import * as elementQuery from './path/to/index.vanilla.js'
```

An example of this can be found in [tests/vanilla-test.html](https://tomhodgins.github.io/element-query-tests/tests/vanilla-test.html)

Now the functions from this library (`minWidth`, `maxWidth`, `minHeight`, `maxHeight`, `minChildren`, `children`, `maxChildren`, `minCharacters`, `characters`, `maxCharacters`, `minScrollX`, `maxScrollX`, `minScrollY`, `maxScrollY`, `minAspectRatio`, `maxAspectRatio`, `orientation`) should be available for use inside this module as  `elementQuery.minWidth`, `elementQuery.maxWidth`, etc

### Demo

A functional demo of these functions being used for styling can be found in [tests/demo.html](https://tomhodgins.github.io/element-query-tests/tests/demo.html)

## Related Info

- [Useful Tests for JS-powered Styling](https://codepen.io/tomhodgins/post/useful-tests-for-js-powered-styling)
- [Element Queries Spec](https://tomhodgins.github.io/element-queries-spec/element-queries.html)
- [jsincss-element-query plugin](https://github.com/tomhodgins/jsincss-element-query)