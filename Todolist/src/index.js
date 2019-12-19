import { addTodo } from './todo.js';

/** @type {HTMLFormElement} */
const formElt = document.querySelector('#todo-form');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo(
    {
      id: Math.random(),
      title: inputElt.value,
      completed: false,
    },
    listElt,
  );
});

// Exercice
/*
En s'inspirant de todomvc.com

Ex: Ajouter une checkbox à gauche des nouvelles lignes
et un bouton - à droite des nouvelles lignes
La checkbox doit etre cochée en fonction de todo.completed
HTMLInputElement -> prop checked / type

Ex: Au clic du bouton moins, supprimer la ligne <div class="todo-row">
parent du bouton
parentNode
removeChild (meilleur compat) / remove (Edge)
btn.addEventListener('click', (event) => {
  btn === event.currentTarget
});

Ex: Au clic de la checkbox class="todo-toggle"
Cocher ou décocher toutes les autres
document.querySelectorAll -> NodeList (boucle for of)
