const add = (a, b) => a + b;
//          function(a, b) { return a + b; };
const hello = (name) => `Hello ${name}`;
// const hello = (name) => `Hello ${name}`;
const pileOuFace = () => (Math.random() > 0.5 ? 'pile' : 'face');

console.log(add(1, 2));
console.log(hello('Romain'));
console.log(pileOuFace());

const callbackJouer = (entierAlea, entierSaisi) => {
  if (entierAlea < entierSaisi) {
    console.log('Trop grand');
  }
};

// si retour de type objet ajouter des parenthèses
// const getCoords = (x, y) => ({x: x, y: y});

// Quand la variable et la clé on le même nom, on peut utiliser shorthand property
const getCoords = (x, y) => ({ x, y });

// REST params
// conversion : liste de valeurs -> tableau (ex: 3, 4 -> [3, 4])
// ...nbs = 3, 4
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  // for (let i = 2; i < arguments.length; i++) {
  //   result += arguments[i];
  // }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD operator
// conversion : tableau -> liste de valeurs (ex: [3, 4] -> 3, 4)
function multiply(a, b) {
  return a * b;
}

const nbs = [3, 4];
console.log(multiply(nbs[0], nbs[1])); // a, b = ...[3, 4]
console.log(multiply(...nbs));

// SPREAD operator pour cloner un tableau (shallow clone -> que au niveau 1)
const clone = [...nbs]; // [nbs[0], nbs[1]]

// ou en ajoutant des valeurs
// const clone = [1, 2, ...nbs, 5];

const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

// Destructurer un tableau
//    ['Romain', 'Bohdanowicz']
const [prenom, nom] = fullName.split(' ');

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
//    ['a', 'b', 'c', 'd', 'e', 'f']
const [a, b, ...others] = letters; // REST Params

const [un, deux, trois = 3] = [1, 2]; // default value

// Destructurer un objet
const coords = { x: 1, y: 2 };
//    {x: 1   , y: 2          }
const { x: newX, y: newY, z = 3 } = coords;
