var globale = 'globale'; // ou module si type="module"
// Module IIFE
// Immediately Invoked Function Expression
(function() {
  var module = 'module';
  function externe() {
    var closure = 'closure';
    function interne() {
      var locale = 'locale';
      console.log(locale, closure, module, globale);
    }
    interne();
  }

  console.log(typeof externe); // function
  console.log(typeof interne); // undefined

  externe();

  // ^
  // |interne
  // |externe
  // |iife
  // +------------------->
}());
