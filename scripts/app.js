$(document).ready(function(){
  $('.jump-link').click(function(){
    $('html,body').animate({
      scrollTop: $('.content-notes').offset().top}, 'slow');
  });
});

function loginFunction(){
  $('.modal-overlay').fadeIn();
  $('.modal-box').slideDown();
}

function closeFunction(){
  $('.modal-overlay').fadeOut();
  $('.modal-box').slideUp();
}
//The link where I got the idea for the login form to close when mouse-down button outside of the form
//https://api.jquery.com/mousedown/
$(document).ready(function(){
  $('.modal-overlay').mousedown(function(){
    $('.modal-overlay').fadeOut();
    $('.modal-box').slideUp();
  });
});
