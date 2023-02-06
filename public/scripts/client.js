
/************* New Tweet Form supporting functions  *************/
// XSS prevention function. Receives a string from the tweet form. Returns a div wrapped string, evading xss.
const escapeXss = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Resets tweet form and character counter
const formReset = () => {
  $('#tweet-form').trigger("reset");
  $('.counter').html('140');
};

// Validate form input. Checks for character count or empty field. Serves the user an error message if either errors occur and returns validation false, preventing the user submitting the tweet.

const formValidation = () => {

  if ($('.counter').val() < 0) {
    $('.error').html('Easy cowboy, that is too many characters')
    setTimeout(() => { $('.error').html('')}, 3000)
    return false;
  }

  if ($('.counter').val() === '140') {
    $('.error').html('You tried to tweet nothing. Please add some content : )')
    setTimeout(() => { $('.error').html('')}, 3000)
    return false;
  }

  return true;
};

/************* Core Functions  *************/
$(document).ready(function () {

  // Get all tweets stored in mem db. Call renderTweets with return data. Print error to user if they fail to load. 
  function loadTweets() {
    $.get('/tweets')
      .done((data) => {
        renderTweets(data);
      })
      .fail(() => {
        $('.feed').append('There was an error loading tweets');
      });

  };

  // Takes in an array of data from loadTweets. Each element is created into a block of html through createTweetelement. The return data is then appended to the feed.
  function renderTweets(data) {

    const processedData = data.reverse();
    processedData.forEach((curr) => {
      $('.feed').append(createTweetElement(curr));
    });
  }

  // Receives an object from renderTweets, outputs a block of html that uses data from the object.
  function createTweetElement(obj) {

    let newElement =
      `<article class="tweet">
        <div class ="tweet-card">
          <header>
            <span> <img src="${obj.user.avatars}"></span>
            <div class="user-info">
              <span>${obj.user.name}</span>
              <span>${obj.user.handle}</span>
            </div>
          </header>
        <div class="tweet-content"><h4>${escapeXss(obj.content.text)}</h4>
        </div>
        <hr>
        <footer>
          <div class="date">${timeago.format(obj.created_at)}</div>
            <div class="tweet-card-icons">
              <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i>
            </div>
        </footer>
      </div>
    </article>`;

    return newElement;
  };

  // Prevent default form submission for new tweets then submit serialized data (querystring) to server. Call form validation functions. Reset after submission. 

  $('#tweet-form').submit(function (event) {
    if (event) {
      event.preventDefault();
    }

    if (formValidation()) {

      $.post('/tweets', ($(this).serialize())).done(() => {

        $.get('/tweets')
          .done((data) => {
            $('.feed').prepend(createTweetElement((data[data.length - 1]))).hide().fadeIn('slow');
          });
      });

      formReset();
    }
  });

  loadTweets();
});