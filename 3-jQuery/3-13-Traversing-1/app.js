// Mudar a cor do botões
$('.btn').each( function () {
  $(this).click( (e) => {
    e.preventDefault();
    $(this).css('background', 'red')
  }); 
});

// Mudar a cor das box do títulos
$('h2').click(function () {
  $(this).closest('div').css('background', 'blue');
})