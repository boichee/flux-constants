## React/Flux Constants

Having used React for a while and seen many files that look like this:

```js
// ComponentConstants.js
var keyMirror = require('key-mirror');

module.exports = keyMirror({
    "SOME_CONSTANT": null,
    "ANOTHER_CONSTANT": null
    })
```

I decided to create an alternative that takes an array of strings and thus, requires less typing:

```js
// ComponentConstants.js
module.exports = require('react-constants')([
    "SOME_CONSTANT",
    "ANOTHER_CONSTANT"
]);
```

Ultimately, the result is the same:
A JS object that looks like this:
`{ SOME_CONSTANT: "SOME_CONSTANT", ANOTHER_CONSTANT: "ANOTHER_CONSTANT" }`

### Usage:

To use this module, create your `Constant` modules in the Flux style, (as above), and then just require those modules (in the CommonJS style). Like this:

```js
var ComponentConstants = require('../constants/ComponentConstants')

console.log(ComponentConstants);
// => { SOME_CONSTANT: "SOME_CONSTANT", ANOTHER_CONSTANT: "ANOTHER_CONSTANT" }
```

Enjoy!
