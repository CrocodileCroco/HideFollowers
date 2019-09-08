// ==UserScript==
// @name HideFollowers
// @namespace Violentmonkey Scripts
// @match https://twitter.com/*
// @grant none
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

// Old Twitter
setInterval(function(){
  $('.ProfileCardStats').remove()
  $('a[data-nav="followers"]').remove()
}, 1);
