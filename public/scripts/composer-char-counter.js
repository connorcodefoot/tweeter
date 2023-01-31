$(document).ready(function () {


  // This function monitors the textarea input for new tweet and reduces the remaining character count accordingly

  $('#tweet-text').on('input', function () {

    let count = 140 - $(this).val().length;
    $('.counter').html(count);

    if (count < 0) {
      $('.counter').css('color', 'red');
    }
    if (count >= 0) {
      $('.counter').css('color', '');
    }
  });
});