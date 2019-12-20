import { addTodo } from './todo.js';
import { fetchTodos } from './api.js';

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

inputElt.addEventListener('input', () => {
  localStorage.setItem('todo', inputElt.value);
});

inputElt.value = localStorage.getItem('todo');

fetchTodos()
  .then((todos) => todos.forEach((t) => addTodo(t, listElt)));
