import { addTodo } from './todo.js';
import { fetchTodos } from './api.js';
import $ from 'jquery';

const $formElt = $('#todo-form');
const $inputElt = $('#todo');
const $listElt = $('.todo-list');
const $toggleElt = $('#todo-toggle');

$formElt.on('submit', (event) => {
  event.preventDefault();

  addTodo(
    {
      id: Math.random(),
      title: $inputElt.val(),
      completed: false,
    },
    $listElt,
  );
});

$listElt.on('click', '.todo-remove', (event) => {
  const $rowElt = $(event.target.parentElement);
  $rowElt.remove();
});

$toggleElt.on('click', () => {
  const $checkboxes = $listElt.find('.todo-completed');
  $checkboxes.prop('checked', $toggleElt.prop('checked'));
});

$inputElt.on('input', () => {
  localStorage.setItem('todo', $inputElt.val());
});

$inputElt.val(localStorage.getItem('todo'));

fetchTodos()
  .then((todos) => todos.forEach((t) => addTodo(t, $listElt)));
