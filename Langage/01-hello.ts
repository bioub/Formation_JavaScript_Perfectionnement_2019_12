const firstNames = ['John', 'Eric', 123];

function h(name: string | number) {
  return `Hello ${name} !`;
}

for (const n of firstNames) {
  console.log(h(n));
}
