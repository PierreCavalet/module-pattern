var Module = (function () {

  var privateMethod = function (text) {
    console.log('private method says ' + text)
  };

  var publicMethod = function () {
    console.log('public method calls the private method:')
    privateMethod('hello')
  };

  return {
    publicMethod: publicMethod
  };
})();
