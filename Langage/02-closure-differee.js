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
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// closure (sauvegarder i)
// (pause 1s) 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
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
  while(debut + delay > Date.now());

  fct();
}
for (var i = 0; i < 3; i++) {
  setTimeoutSync(function() {
    console.log(i);
  }, 1000);
}
