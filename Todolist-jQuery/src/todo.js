import $ from 'jquery';

export function addTodo(todo, $containerElt) {
  const $rowElt = $('<div></div>');
  $rowElt.addClass('todo-row');

  $('<input type="checkbox">')
    .addClass('todo-completed')
    .prop('checked', todo.completed)
    .appendTo($rowElt);

  const $spanElt = $('<span></span>');
  $spanElt.text(todo.title);
  $rowElt.append($spanElt);

  const $btnRemoveElt = $('<button></button>');
  $btnRemoveElt.addClass('todo-remove');
  $btnRemoveElt.text('-')
  $rowElt.append($btnRemoveElt);

  $containerElt.append($rowElt);

}
