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

If you wish to understand how it works, I suggest you take a look at the sections down below.

## Understanding require

When you require a module, this is what Node does:

1. **Resolve** the absolute path of the file
2. **Load** the module
3. **Wrap** the module inside a function
4. **Evaluate** the module code
5. **Cache** the module so we won't go through all these steps again

## exports vs module.exports

The `module.exports` object in every module is what the `require` function will return when we require a module.

```js
// foo.js
module.exports = 'foo module'

// bar.js
var foo = require('foo')
console.log(foo) // will output 'foo module'
```

We can use `exports` to add a new exported property.

```js
// foo.js
exports.id = 'foo module id'

// bar.js
var foo = require('foo')
console.log(foo.id) // will output 'foo module id'
```

But we cannot use `exports` just like we use `module.exports`.

```js
// foo.js
exports = 'foo module'

// bar.js
var foo = require('foo')
console.log(foo) // will output {}
```

This is because `exports` is just a reference to `module.exports` which manage the exported properties. If you reassign the `exports` variable, you loose the `module.exports` object reference and end up with whatever you have put in the `exports` variable.

## Wrapping process

In a browser, when we declare a variable, this variable is globally available. In Node, the variable is only accessible within the module.

Before a module's code is executed, Node will wrap it with a function wrapper that looks like the following:

```js
(function (exports, require, module, __filename, __dirname) {
  // Your module code actually lives in here
});
```

Seeing where your code lives shows you why the `module` and the `exports` variables are available in your module. And because you know that a variable is scoped in her top-level function, you can see why variables declared in the module can only be used in the module.

For more information, check the [official documentation](https://nodejs.org/api/modules.html) on Node.js modules.
