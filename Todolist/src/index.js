import { addTodo } from './todo.js';

/** @type {HTMLFormElement} */
const formElt = document.querySelector('#todo-form');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */
const toggleElt = document.querySelector('#todo-toggle');

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

listElt.addEventListener('click', (event) => {
  if (!event.target.classList.contains('todo-remove')) {
    return;
  }
  const rowElt = event.target.parentElement;
  listElt.removeChild(rowElt);
});

toggleElt.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = listElt.querySelectorAll('.todo-completed');
  for (const checkbox of checkboxes) {
    checkbox.checked = toggleElt.checked;
  }
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
*/
