
// Display a button in the rightside of the window for scrolling back to top

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('#topBtn').css('visibility', 'visible');
    } else {
      $('#topBtn').css('visibility', 'hidden');
    }
  });


  // On click, scroll back to top
  $('#topBtn').on('click', () => {
    window.scrollTo(0, 0);
    $('#topBtn').css('visibility', 'hidden');
  });

});