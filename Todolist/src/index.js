import { addTodo } from './todo.js'

/** @type {HTMLFormElement} */
const formElt = document.querySelector('#todo-form');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo({
    id: Math.random(),
    title: inputElt.value,
    completed: false,
  }, listElt);
});
