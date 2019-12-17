var names = ["John", "Eric"];

function hello(name) {
  return "Hello " + name + " !";
}

for (var i = 0; i < names.length; i++) {
  var n = names[i];
  console.log(hello(n));
}
