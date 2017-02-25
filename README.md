# Module pattern

## What is a module ?

A module is a set of functionalities that you can easily add or remove without breaking your application.

### What is the goal of modules ?

Modules are used for four main reasons:

#### Reusability

When you create a module, you don't need to copy/paste code anymore. The module expose functionality that you can use and reuse at your convenience.

#### Maintainability

It is far easier to maintain an application when the code is splitted correctly into modules.

#### Namespacing

In javascript, when you declare a variable outside of a top-level function, the variable is global. As your application grow, it will be harder and harder to know if you already used a variable name or not. And even you can remember which global variable names you already used, what is the point of sharing variables between unrelated code ?

#### Privacy
Modules are used to mimic classes. It provides a way to have both public and private methods and variables in an object.

## How do I create a module ?

There are multiple implementations of the module pattern, but the important thing is to understand what is the goal of the module pattern. Because of that, I am just presenting one of the module pattern implementation, which is called the **Revealing Module pattern**.

### Immediately Invoked Function Expressions

To understand the module pattern, you first need to understand what IIFE (Immediately-Invoked-Function-Expressions) is.

An IFFE is ... that:

```js
(function () {
  // code
})();
```

I bet you have already seen that. The code inside the function is immediately executed.

for example, if you write this in your console:

```js
(function () {
  console.log('Testing an IIFE');
})();
```

You'll see `Testing an IIFE`

The parentheses wrapping the function are used to create an expression, and the last parentheses are used to invoke this function (just like you would call any function). So if you want to pass parameters in your function, you would be doing this:

```js
(function (text) {
  console.log('Testing an IIFE parameters: ' + text);
})('foo');
```

And it would output `Testing an IIFE parameters: foo`

*Ok, good for you, but you know, I can do the same thing without your IIFE stuff:*

`console.log('Testing an IIFE');`

Well I guess you are right. But I promise you it will be useful soon enough.

### Building the module
I think the best way to explain the module pattern is to give you an example of a simple module and then to break it down so here it is (don't be scared, you are gonna be all right):

```js
var Module = (function () {
  var privateMethod = function () {
    console.log('private');
  };
  var publicMethod = function () {
    console.log('public');
  };
  return {
    publicMethod: publicMethod
  };
})();

Module.publicMethod();  // public
Module.privateMethod(); // undefined
```

Ok, it may seems like a lot to take in. Let's break it down.

In javascript, variables declared within a function become LOCAL to the function. `privateMethod` AND `publicMethod` are **not** accessible OUTSIDE the IIFE.

We are using an IIFE which returns a JSON Object. this JSON object is going in the `Module` variable. It will represent our module. The goal of this object is to REVEAL (that is why it is called Revealing module pattern) the functions and variables we want our module to expose.

Here, we are REVEALING the publicMethod, and that is why we can access the publicMethod with

```js
Module.publicMethod();  // public
```

and why we cannot access the privateMethod.

**So what did we do ?**

We created a module with 2 functions, one that we exposed (revealed), and one that is private. The private function can only be used in the module (i.e. in the IIFE). **Privacy**.

The code for the module is inside the IIFE, and the code to use the module is OUTSIDE. **Maintainability**.

We can use this module wherever we want by using the Module global variable. **Reusability**.

Everything which is exposed by the module is prefixed by `Module.` and the module itself is the only thing in the global scope. **Namespacing**.
