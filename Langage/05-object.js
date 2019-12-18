// En JS, on manipule de nombreux objets existants :

// Définis par le langage JS
console.log(Math.PI);
console.log('Romain'.toUpperCase())

// Défini par Node.js
console.log(process.stdin);

// Défini par le navigateur
// console.log(document.createElement)

// Un objet est un système clé/valeur (dictionnaire)
// dynamique versus des systèmes statiques (Java, PHP, C#, C++)

// console.log(Math.sum(2, 3)); // TypeError: Math.sum is not a function

Math.sum = (a, b) => a + b; // ES6
Math.sum = function(a, b) { return a + b; };

console.log(Math.sum(2, 3));

delete Math.sum;
// console.log(Math.sum(2, 3)); // TypeError: Math.sum is not a function

// Plus proches d'autre que l'objet dans les autres langages :
// Java -> Map
// PHP -> Tableau associatif
// C -> struct
// C++ -> HashTable
// Python -> dictionary

// 2 opérateurs pour accéder aux valeurs depuis les clés
console.log(Math.PI);
console['log'](Math['PI']);

// les crochets sont plus dynamiques
const method = 'log';
const prop = 'PI';
console[method](Math[prop]);

// 2 syntaxe possible pour créer ses objets

// object literal (assez proche de JSON)
// à utiliser :
// si votre objet ne contient pas de méthode
// ou si votre objet contient des méthodes, qu'il ne soit créé qu'une fois
const coords1 = {
  x: 1,
  y: 2,
  sumXY: function() {
    return this.x + this.y;
  }
};

console.log(coords1.x); // 1
console.log(coords1.sumXY()); // 3

const coords2 = {
  x: 1,
  y: 2,
  sumXY: function() {
    return this.x + this.y;
  }
};

console.log(coords1 == coords2); // compare les références (ici faux)
console.log(coords1 === coords2); // compare les références (ici faux)

console.log(coords1.sumXY === coords2.sumXY); // false (2 fonctions en mémoire)
// on ne devrait pas avoir de méthode dans object literal dans cas
// car elle sont dupliquées



// fonction constructeur
function Coords(x, y) {
   // pseudo-variable (variable créée par JS au moment de l'appel)
   // console.log(arguments); // paramètres passés à la fonction 1,2 puis 2,3
   // console.log(this); // l'objet créé (coordsA puis coordsB)
  this.x = x;
  this.y = y;
  if (arguments[2] !== undefined) {
    this.z = arguments[2];
  }
}

Coords.getClass = function() {
  return 'Coords';
}

Coords.prototype.sumXY = function() {
  return this.x + this.y;
};

const coordsA = new Coords(1, 2);
console.log(typeof Coords); // function
console.log(typeof coordsA); // object
console.log(coordsA.x); // 1
console.log(coordsA.sumXY()); // 3


const coordsB = new Coords(2, 3);
console.log(coordsB.x); // 2
console.log(coordsB.sumXY()); // 5

// Comme en Java tous les objets héritent de Object
// les méthodes de Object.prototype sont tout le temps disponible

console.log(coordsA.x !== undefined); // true
console.log(coordsA.hasOwnProperty('x')); // true

console.log(coordsA.sumXY !== undefined); // true
console.log(coordsA.hasOwnProperty('sumXY')); // false
