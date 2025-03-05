// Add conteúdo em um Elemento
$('h2').append('Isso é um h2');


$('h1').append('.introducao h1');
$('h1').appendTo('.introducao h1');

var conteudoH2 = $('h2').html('teste');
console.log(conteudoH2);