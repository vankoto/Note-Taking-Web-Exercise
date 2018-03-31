$(document).ready(function(){
  $('.jump-link').click(function(){
    $('html,body').animate({
      scrollTop: $('.content-notes').offset().top}, 'slow');
  });
});
