# Module pattern with Node.js

In Node.js, each file is treated as a separate module. if we want to reproduce the same example, we would just have to do:

```js
// myModule.js

var privateMethod = function () {
  console.log('private')
}

var publicMethod = function () {
  console.log('public')
}

module.exports = {
  publicMethod: publicMethod
}
```

Looks better, right ?

And if you want to use your module in a different file, you just have to get it with `require`.

```js
var myModule = require('myModule')

myModule.publicMethod() // public
```

For more information, check the [official documentation](https://nodejs.org/api/modules.html) on Node.js modules.
