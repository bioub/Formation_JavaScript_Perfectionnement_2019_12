/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} containerElt
 */
export function addTodo(todo, containerElt) {
  const rowElt = document.createElement('div');
  rowElt.classList.add('todo-row');

  const checkboxElt = document.createElement('input');
  checkboxElt.classList.add('todo-completed');
  checkboxElt.type = 'checkbox';
  checkboxElt.checked = todo.completed;
  rowElt.appendChild(checkboxElt);

  const spanElt = document.createElement('span');
  spanElt.innerText = todo.title;
  rowElt.appendChild(spanElt);

  const btnRemoveElt = document.createElement('button');
  btnRemoveElt.classList.add('todo-remove');
  btnRemoveElt.innerText = '-';
  rowElt.appendChild(btnRemoveElt);

  containerElt.appendChild(rowElt);
  /*
  {
    title: 'ABC',
    completed: false
  }
  */
  /*
  <div class="todo-row">
    <input type="checkbox" name="todo-completed" id="todo-completed">
    <span>ABC</span>
    <button>-</button>
  </div>
  */
}
