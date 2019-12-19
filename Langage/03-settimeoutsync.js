function pause(delay) {
  const debut = Date.now();
  // PAUSE delay
  while (debut + delay > Date.now());
}

for (var i = 0; i < 3; i++) {
  pause(1000);
  console.log(i);
}
