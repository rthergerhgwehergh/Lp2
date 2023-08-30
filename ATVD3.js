filter:

let array = [2,4,6,8,9,11];
let novo = array.filter(num => num > 7);
console.log(novo); // saída: [6,8]

Sort:

let array = [2,4,6,8];
let carac = ['d', 'c', 'b', 'a'];
let descendente = array.sort((a, b) => a > b ? -1 : 1);
console.log(descendente);
let ascendente = carac.sort((a, b) => a > b ? 1 : -1);
console.log(ascendente);

Array.from:

let titulo = 'AprendaJS';
let novo = Array.from(titulo);
console.log(novo); // saída: ['A', 'p', 'r', 'e', 'n', 'd', 'a', 'J', 'S']

includes:

const arr = [2,4,6,8];
console.log(arr.includes(6)); // saída: true
console.log(arr.includes(9)); // saída: false