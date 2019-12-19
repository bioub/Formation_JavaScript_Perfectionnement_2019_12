// 'use strict';

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name} !`);
  }
  // helloAsync() {
  //   const that = this;
  //   setTimeout(function() {
  //     console.log(`Hello ${that.name} !`);
  //   }, 1000);
  // }
  // helloAsyncMethod() {
  //   setTimeout(this.hello.bind(this), 1000);
  // }
  helloAsync() {
    setTimeout(() => {
      // les pseudos variables (this, arguments, new.target)
      // ne sont pas créées dans une fonction fléchée
      console.log(`Hello ${this.name} !`);
    }, 1000);
  }
  helloAsyncMethod() {
    setTimeout(() => this.hello(), 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();

global.name = 'Georges';

function hello(p1, p2) {
  console.log(`Hello ${p1}, hello ${p2}, my name is ${this.name} !`);
}

hello('Jean', 'Eric'); // `Hello Jean, hello Eric, my name is Georges !`
// erreur en mode strict (this n'existe pas)

hello.call(romain, 'Jean', 'Eric');
hello.apply(romain, ['Jean', 'Eric']);
hello.call(romain, ...['Jean', 'Eric']);

// function bind(that) {
//   return function() {
//     originalFct.apply(that, arguments);
//   }
// }

const helloRomain = hello.bind(romain);
helloRomain('Jean', 'Eric');

// Variables
// const si possible -> let sinon

// Fonctions
// si pas dans un objet
// function hello() {} ou const hello = () => {}
// si dans un objet
// class Coords {
//   maFonction() {
//
//   }
// }
// const coords = {
//   maFonction() {
//
//   }
// }
// si callback toujours () => {} (plus court, et résout le problème avec this)
