// Objeto

var gabriel = {
  nome: 'Gabriel',
  idade: 30,
  altura: 1.75,
  cidade: 'São Paulo'
};

console.log(gabriel.nome);

// Quadrado com Objeto com Function
var quadrado = {
  totalDeLados: 4,
  area: function(lado) {
     return lado * lado;
  },
  perimetro: function(lado){
    return this.totalDeLados * lado;
  }
}

console.log('Área do quadrado:', quadrado.area(5));

// Valor de PI
var pi = Math.PI;

console.log(pi);


var pessoal = {
  nome: 'Gabriel',
  profissao: 'Dev',
  idade: 24,
  agradecer: function() {
    return "Obrigado" + this.nome;
  }
}

console.log(pessoa.idade);

// Puxar valor do Objeto
var carro = {
  modelo: "BMW",
  cor: "white"
}

console.log("Modelo do carro:", carro.modelo);