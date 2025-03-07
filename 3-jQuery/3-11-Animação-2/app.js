// Fechar modal
$('.btn').click( () =>{
  $('.modal').fadeOut(222);
});

// Abrir modal
$('.abrir-modal').click( () =>{
  $('.modal').fadeIn(222);
});

// Podemos utilizar o Hide para esconder
$('.abrir-modal').click( () =>{
  $('.modal').hide();
});

// Podemos usar o Show para mostrar
$('.abrir-modal').click( () =>{
  $('.modal').show();
});


// Mostra pra cima 
$('.abrir-modal').click( () =>{
  $('.modal').slideUP();
});

// Esconde pra baixo
$('.abrir-modal').click( () =>{
  $('.modal').slideDown();
});
