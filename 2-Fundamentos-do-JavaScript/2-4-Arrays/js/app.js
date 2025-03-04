// Arrays
var videoGames = ['Wiuu', 'PS4', 'Xbox'];

var totalItens = videoGames.length;

console.log(videoGames[2]);

console.log('Quantos itens tem na Array ' + videoGames.length);

// Buscar sempre o último item da Array
console.log(videoGames[totalItens - 1]);

// Add um item da array
var adicionar2DS= videoGames.push('2');

// Buscar item da array
var buscarItem = videoGames.indexOf('PS4');
console.log('Buscar o último item: ' + buscarItem);

// Remover item da array
var removerItem = videoGames.splice(1, 2);
console.log('Remover o último item: ' + removerItem);
