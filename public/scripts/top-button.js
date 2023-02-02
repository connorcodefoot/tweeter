
$(document).ready(function () {

  $(window).scroll(function() {
    if($(window).scrollTop() > 600) {
      $('#topBtn').css('visibility', 'visible')
    } else {
      $('#topBtn').css('visibility', 'hidden')
    }
});


  // On click, focus on text area new tweet
$('#topBtn').on('click', () => {
  window.scrollTo(0,0)
  $('#topBtn').css('visibility', 'hidden')
  $('#tweet-text').focus()
  
})


})