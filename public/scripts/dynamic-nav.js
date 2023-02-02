
$(document).ready(function () {

  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('nav').css('background-color', '#4056A1')
      $('nav').css('color', '#fff')
    } else {
      $('nav').css('background-color', 'transparent')
      $('nav').css('color', '#999999')

    }
  });

})