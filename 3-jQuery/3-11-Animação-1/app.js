// Animação ao clicar no btn para fechar o modal
$('a').click( () => {
  $('.modal').animate({
    opacity: 0,
    height: 0,
  }, 2000);
})


