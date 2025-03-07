$(document).ready(function() {
 var velocidade = $('.abrir-modal').data('velocidade');
 if (velocidade == 'slow') {
   $('a').slideUp(1000);
 } else if (velocidade == 'fast')  {
    $('a').slideUp(500);
 }
}); 


setTimeout(function() {
 $('a').css('background', blue)
}, 2000);
