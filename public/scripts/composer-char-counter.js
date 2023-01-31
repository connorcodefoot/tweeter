$(document).ready(function() {
  
  let tweetText = document.getElementById('tweet-text')

  tweetText.addEventListener('input', function() {

    const counter = document.getElementsByClassName('counter')
    let count = 140 - $(this).val().length
    $(counter).html(count)

    if(count < 0) {
      $(counter).css('color', 'red')
    } 
    if(count >= 0) {
      $(counter).css('color', '')
    }
  })

});