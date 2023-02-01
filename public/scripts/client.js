/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function () {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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

function renderTweets(arr) {

  arr.forEach((curr) => {
    $('.feed').append(createTweetElement(curr));
  });
}

renderTweets(data);


$('#submit-tweet').submit(function(event){
  if(event) { 
     event.preventDefault();  
  }  
})

});