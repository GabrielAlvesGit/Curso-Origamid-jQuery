$('.abrir-modal').click( () => {
  $('.modal').toggle('active');
  var condicao = $('.modal').hasClass('active');
  if (condicao) {
    $('.abrir-modal').text('fechar modal');
  } else {
    $('.abrir-modal').text('abrir modal');
  }
});