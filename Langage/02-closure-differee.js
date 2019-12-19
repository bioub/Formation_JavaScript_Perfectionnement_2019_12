// ^
// |
// |externe - interne
// +------------------->
function externe(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
const bonjour = externe('Bonjour');

hello(); // Hello
bonjour(); // Bonjour
hello();
bonjour();

// (pause 1s) 3 3 3
for (var l = 0; l < 3; l++) {
  setTimeout(function() {
    console.log(l);
  }, 1000);
}

// closure (sauvegarder i)
// (pause 1s) 0 1 2
for (var k = 0; k < 3; k++) {
  setTimeout(externe(k), 1000);
}
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// fonction setTimeoutSync ou 3 setTimeout imbriqué
// (pause 1s) 0 (pause 1s) 1 (pause 1s) 2
function setTimeoutSync(fct, delay) {
  const debut = Date.now();
  // PAUSE delay
  while (debut + delay > Date.now());

  fct();
}
for (var j = 0; j < 3; j++) {
  setTimeoutSync(function() {
    console.log(j);
  }, 1000);
}
