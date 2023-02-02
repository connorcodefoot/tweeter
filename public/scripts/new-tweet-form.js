$(document).ready(function () {


  // This function tracks the number of characters a user has entered and adjusts the user facing character count accordingly

  $('#tweet-text').on('input', function () {

    let count = 140 - $(this).val().length;
    $('.counter').html(count);

    if (count < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '');
    }
  })
});
