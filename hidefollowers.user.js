// ==UserScript==
// @name HideFollowers
// @namespace Violentmonkey Scripts
// @match https://twitter.com/*
// @match https://www.youtube.com/*
// @match https://www.instagram.com/*
// @grant none
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

//!Twitter (Only Old version because of CORS problem)

setInterval(function(){
  $('.ProfileCardStats').remove()
  $('a[data-nav="followers"]').remove()
}, 1);

//!Instagram

setInterval(function(){
  $('a[href$="/followers/"]').remove()
}, 1);

//!YouTube

setInterval(function(){
  $('yt-formatted-string[id="subscriber-count"]').remove()
  $('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]').remove()
  $('yt-formatted-string[id="owner-sub-count"]').remove()
}, 1);
