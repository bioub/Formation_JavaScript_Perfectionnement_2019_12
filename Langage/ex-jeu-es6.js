const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require("readline");

class Jeu {
  constructor(options = {}) {
    // const min = options.min || 0;
    // const max = (options.max !== undefined) ? options.max : 100;
    const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.entierAlea = Random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      //console.log("Vous avez déjà joué : " + this.essais.join(" | ") + ".");
      console.log(`Vous avez déjà joué : ${this.essais.join(" | ")}.`);
    }

    this.rl.question("Quel est le nombre entier ? ", (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log("Erreur: il faut saisir un entier");
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log("Trop petit");
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log("Trop grand");
        this.jouer();
      } else {
        console.log("Gagné");
        this.rl.close();
      }
    });
  }
}

const game = new Jeu();
game.jouer();
