$('a').click(( ) => {
  var current = $(this);
  $('.abrir-modal').text('click');
});

// Prevent default link behavior when clicking on anchor tags
$('a').click((e) => {
  var current = $(this);
  e.preventDefault();  
  $('.abrir-modal').text('click');
});

// Scroll
$(document).click('scroll',( ) => {
  $('a').text('click');
});
