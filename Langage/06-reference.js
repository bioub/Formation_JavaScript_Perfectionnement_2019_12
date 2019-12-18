let p1 = 'Jean';
let p2 = p1; // passage par valeur/copie
p2 = 'Eric';
console.log(p1); // Jean

let o1 = { p: 'Jean' };
let o2 = o1; // passage par référence
o2.p = 'Eric';
console.log(o1.p); // Eric
