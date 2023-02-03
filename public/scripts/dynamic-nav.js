
$(document).ready(function () {

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  console.log(window.matchMedia)

  if (mediaQuery) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('nav').css('background-color', '#4056A1');
        $('.nav-menu').css('visibility', 'hidden')
      } else {
        $('nav').css('background-color', '');
        $('.nav-menu').css('visibility', '')
      }
    })
  }
});