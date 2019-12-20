// avec babel npm i regenerator-runtime
// import 'regenerator-runtime';
// export async function fetchTodos() {
//   const res = fetch('https://jsonplaceholder.typicode.com/todos');
//   const todos = await res.json();
//   return todos.slice(0, 10);
// }
import $ from 'jquery';

export function fetchTodos() {
  // return fetch('https://jsonplaceholder.typicode.com/todos')
  return $.get('http://localhost:3000/todos')
    .then((todos) => todos.splice(0, 10));
}
