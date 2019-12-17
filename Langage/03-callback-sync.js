const names = ["John", "Eric", "Romain"];

// Paradigme Impératif
// Algo qui affiche en majuscule tous les prénoms
// de 4 lettres
for (var i = 0; i < names.length; i++) {
  const name = names[i];
  if (name.length === 4) {
    const nameFourLetters = name;
    const nameFourLettersUpper = nameFourLetters.toUpperCase();
    console.log(nameFourLettersUpper)
  }
}

// Paradigme Fonctionnel
// New in ES5 : fonctions forEach, filter, map (Array)
// (name) => name.length === 4 -> callback
names.filter((name) => name.length === 4)
     .map((nameFourLetters) => nameFourLetters.toUpperCase())
     .forEach((nameFourLettersUpper) => console.log(nameFourLettersUpper));

// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach   lg
// +-------------------------------------->
//                           JOHN ERIC FIN

console.log('FIN');
