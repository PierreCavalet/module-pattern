var AugmentedModule = (function (Module) {

  Module.bar = function () {
    console.log('AugmentedModule (override): bar function')
  };

  Module.baz = function () {
    console.log('AugmentedModule: baz function')
  };

  return Module;
})(Module || {});
