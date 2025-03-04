var teste1 = 20 + 30;

console.log(teste1);


// Operador de comparação  - achou o falso
var teste1 = 30 == 30;
var teste2 = 30 === '30';
var teste2 = 30 != 30;

console.log(teste1);

// Operador Lógico "&&" -- Porque achou a primeira verdadeiro
var a1 = true && true; // true
var a2 = true && false; // false
var a3 = false && true; // false
var a4 = false && (3 == 4); // false
var a5 = "Gato" && "cão"; // cão

// Operador Lógico "|| - ou"
var a1 = true || true; // true
var a2 = false || true; // true
var a3 = true || false; // true
var a4 = false || (3 == 4); // false
var a5 = "Gato" || "cão"; // Gato