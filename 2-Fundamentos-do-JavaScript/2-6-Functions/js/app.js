// Function declaration

function areaQuadrado(lado) {
  var area = lado * lado;
  return area;
}

console.log(areaQuadrado(10));

// imc
function imc(peso, altura) {
  var imcTotal = peso /  (altura * altura);
  return imcTotal;
}

console.log(imc(70, 1.75));

//
function corPreferida(cor) {
  if (cor == 'azul') {
    console.log('você gosta do céu');
  } else if (cor == 'amarelo') {
    console.log('você gosta do sol');
  } else if (cor == 'verde'){
    console.log('você gosta de mato');
  } else {
    console.log('você nao gosta de nada');
  }
}

corPreferida('azul');
corPreferida('amarelo');
corPreferida('verde');
corPreferida('');

//
var totalPaises = 200;

function precisoVisitar(paisesVisitados) {
  var faltaVisitar = totalPaises - paisesVisitados;
  console.log('Faltam' + faltaVisitar + 'paises para você visitar');
}

precisoVisitar(150);

// Função Anonymous
var custoDoCarro = function(portas) {
  var precoInicial = 1000;
  if (portas) {
    return portas * precoInicial;
  } else {
    return 2 * precoInicial;
  }
}

console.log(custoDoCarro(3));
