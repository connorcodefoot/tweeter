
$(document).ready(function () {

  // Display nav differently and change dynamic styles based on media width 

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  console.log(window.matchMedia);

  if (mediaQuery) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('nav').css('background-color', '#4056A1');
      } else {
        $('nav').css('background-color', '');
      }
    });
  }

  // Focus on new tweet text area when Write new tweet icons are selected in the nav
  $('.fa-solid.fa-angles-down').on('click', () => {
    $('#tweet-text').focus();
  });

});