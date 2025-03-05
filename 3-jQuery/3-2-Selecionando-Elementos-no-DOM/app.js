// Selecionar 1 Elemento
$('ul li a').hide();

// Selecionar MultElementos
$('ul li, .terceira, .segunda').hide();

// Selecionar por Atributo
$('a[href^=""]').hide();

// Selão na Variável
var paragrafo = $('.paragrafo');

console.log(paragrafo);

// Verificar se o Elemento Existe
if ($('span').length) {
  console.log('Span Existe');
}