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

$(document).ready(function(){
  $('.modal-overlay').mousedown(function(){
    $('.modal-overlay').fadeOut();
    $('.modal-box').slideUp();
  });
});
