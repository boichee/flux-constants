## React/Flux Constants

A bit 'o sugar for those looking to quickly create Flux style constants.

### Installation:

Two options:

#### Option 1: npm

```
npm install --save react-constants
```

#### Option 2: clone

```
git clone https://github.com/boichee/flux-constants
```


Having used React for a while and seen many files that look like this:

```js
// ComponentConstants.js
var keyMirror = require('key-mirror');

module.exports = keyMirror({
  "SOME_CONSTANT": null,
  "ANOTHER_CONSTANT": null
});
```

I decided I hated having to type null over and over again for no reason.

So, I created this module as an alternative. Now you can do:

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

First, create your Flux Constants file:

`SomeFluxConstants.js`
```js
module.exports = require('react-constants')([
  'MY_FIRST_CONSTANT',
  'MY_SECOND_CONSTANT'
]);
```

Then use the constants like this:

`SomeFluxActionCreator.js`
```js
var ComponentConstants = require('../constants/ComponentConstants')

var FluxActions = {
  doSomethingFluxLike: function(data) {
    var action = {
      type: ComponentConstants.MY_FIRST_CONSTANT,
      data: data
    };
    
    AtlasDispatcher.handleAction(action);
  }
};
```

Enjoy!
