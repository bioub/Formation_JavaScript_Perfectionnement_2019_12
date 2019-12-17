const names = ["John", "Eric"];

/**
 * Helloworld
 * @param {string} name Le prénom
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

for (const n of names) {
  console.log(hello(n));
}
