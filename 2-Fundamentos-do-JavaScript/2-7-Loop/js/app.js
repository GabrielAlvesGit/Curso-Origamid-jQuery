// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Lista de cliente
var cliente = ['André', 'Rafael', 'Marian', 'João'];
var totalArray = cliente.length;

cliente[1];

for (var i = 0; i < totalArray; i++) {
  console.log(cliente[i]);
}

// Break
// 
var cliente1 = ['André', 'Rafael', 'Marian', 'João'];
var totalArray2 = cliente1.length;

cliente1[1];

for (var i = 0; i < totalArray2; i++) {
  console.log(cliente1[i]);
  if (cliente1[i] === 'Marian') {
    break;
  }
}