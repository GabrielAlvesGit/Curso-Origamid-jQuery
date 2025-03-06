// Pegar o valor do atributo
var href = $('a').attr('href');
console.log(href);

// Remover o atributo
var href = $('a').removeAttr('href');

$('#botao').click(() =>{
  var nome = $('.nome').var('teste');
  $('.btn').text(nome);
});