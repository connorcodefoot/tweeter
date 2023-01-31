$(document).ready(function() {
  
  let tweetText = document.getElementById('tweet-text')

  tweetText.addEventListener('input', function() {
    let count = 140 - $(this).val().length
    console.log(count)
  })

});