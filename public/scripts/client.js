/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function () {

  function loadTweets() {

    $.get('/tweets').done((data) => {
      renderTweets(data);
    });

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
        <div class="tweet-content"><h4>${obj.content.text}</h4>
        </div>
        <hr>
        <footer>
        <div class="date">${obj.created_at}</div>
        <div class="tweet-card-icons">
        <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div></footer>
      </div>
    </article>`;

    return newElement;
  };

  // Takes in an array of data. Each element is created into a block of html through createTweetelement. The return data is then appended to the feed.
  function renderTweets(data) {

    data.forEach((curr) => {
      $('.feed').append(createTweetElement(curr));
    });
  }

  // Prevent submission for new tweets, then submit serialized data (querystring) to server
  $('#submit-tweet').submit(function (event) {
    if (event) {
      event.preventDefault();
    }

    $.post('/tweets', ($(this).serialize()));

  });

  loadTweets();
});


