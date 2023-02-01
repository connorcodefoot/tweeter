/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// 


// Takes in a json tweet object

function createTweetElement (obj) {

  $(document).ready(function () {
    
    let newElement = 
    `<article class="tweet"><div class ="tweet-card"><header><div class="tweetBy">${obj.user.name}</div><div class="tweetByhandle">${obj.user.handle}</div></header><div class="tweet-content"><h4>${obj.content.text}</h4></div><hr><footer><div class="date">${obj.created_at}</div><div class="tweet-card-icons"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div></footer></div></article>`
    return $('.feed').append(newElement); 
  })
}

// Returns a tweeter article element containing the entire html structure






// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "JOJON",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
    "text": "BABABOOYEE"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData)

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.feed').append($tweet); 