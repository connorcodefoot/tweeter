
 // XSS prevention function
 
 const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  };

// Resets tweet form text and counter
  const formReset = () => {
    $('#submit-tweet').trigger("reset");
    $('.counter').html('140');
  }


$(document).ready(function () {


  // Get all tweets stored in mem db and call render
  function loadTweets() {
    $.get('/tweets')
    .done((data) => {
      renderTweets(data);
    })
    .fail(() => {
      $('.feed').append('There was an error loading tweets')
    })

  };

  // Receives an object, outputs a block of html that uses data from the object.
  function createTweetElement(obj) {

    let newElement =
      `<article class="tweet">
      <div class ="tweet-card">
        <header> 
          <div>
            <span class="avatar">
            <img src="${obj.user.avatars}"></span>
            <span class="tweetBy">${obj.user.name}</span>
          </div>
          <div class="tweetByhandle">${obj.user.handle}</div>
        </header>
        <div class="tweet-content">${escape(obj.content.text)}
        </div>
        <hr>
        <footer>
        <div class="date">${timeago.format(obj.created_at)}</div>
        <div class="tweet-card-icons">
        <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div></footer>
      </div>
    </article>`;

    return newElement;
  };

  // Takes in an array of data. Each element is created into a block of html through createTweetelement. The return data is then appended to the feed.
  function renderTweets(data) {

    const processedData = data.reverse()
    processedData.forEach((curr) => {
      $('.feed').append(createTweetElement(curr));
    });
  }

  // Prevent default form submission for new tweets then submit serialized data (querystring) to server. It also includes error messaging for empty tweets or a tweet that exceeds the # of characters available.
  
  $('#submit-tweet').submit(function (event) {
    if (event) {
      event.preventDefault();
    }

    if($('.counter').val() < 0) {
      return $('.error').html('Easy cowboy, that is too many characters').fadeOut(4000)
    }

    if($('.counter').val() === '140') {
      return $('.error').html('You tried to tweet nothing. Please add some content : )').fadeOut(4000)
    }


    $.post('/tweets', ($(this).serialize())).done(() => {
      $.get('/tweets').done((data) => {
        $('.feed').prepend(createTweetElement((data[data.length - 1]))).hide().fadeIn('slow')
      });
    });

    formReset()

  });

  // Focus on tweet text area when write a new tweet icon is selected
  $('.fa-solid.fa-angles-down').on('click', () => {
  
    $('#tweet-text').focus()
  
  })

  loadTweets();
});