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

  const spanElt = document.createElement('span');
  spanElt.innerText = todo.title;
  rowElt.appendChild(spanElt);

  containerElt.appendChild(rowElt);
  /*
  {
    id: 123,
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
