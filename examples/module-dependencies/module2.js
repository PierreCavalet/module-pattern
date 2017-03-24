var Module2 = (function (Module1) {

  var bar = function () {
    console.log('Module2: bar function');
    console.log('Calling the Module1 foo function ...');
    Module1.foo();
  };

  return {
    bar: bar
  };
})(Module1 || {});
