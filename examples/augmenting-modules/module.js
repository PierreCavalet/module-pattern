var Module = (function () {

  var foo = function () {
    console.log('Module: foo function')
  };

  var bar = function () {
    console.log('Module: bar function')
  };

  return {
    foo: foo,
    bar: bar
  };
})();
