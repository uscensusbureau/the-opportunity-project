'use strict';

var $ = require('jquery');
var calculateAnchorPosition = require('./calculate-anchor-position');

/* Firefox needs html, others need body */
var root = $('body, html');

// capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
  var ENTER = 13;
  if (e.which === ENTER) {
    $(this).data('keypress', true);
  }
});

$('.sidenav').on('click', 'a', function (e) {
  // long url splitting
  var hashLocation  = $(this).attr('href').split('#')[ 1 ];
  var scrollTopPos  = calculateAnchorPosition(hashLocation);

  //if anchor doesn't exist on the page, or calc fails
  //then exit gracefully
  if (scrollTopPos === 0) {
    return true;
  }

  e.preventDefault();

  root.animate({
    scrollTop: scrollTopPos,
  }, {
    duration: 200,
    start: function () {
      var newHash = '#' + hashLocation;

      // using pushState is easiest way to prevent double jumps
      if (history && history.pushState && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      } else if (window.location.hash !== newHash) {
        window.location.hash = newHash;
      }
    },
    done: function () {
      // if keyboard was used, update keyboard focus to section
      var link    = $(e.target);
      var section = $('#' + hashLocation);

      if (link.data('keypress') === true) {
        link.removeData('keypress');
        section.attr('tabindex', '-1');
        section.focus();
      }
    },
  });
});



$('.usa-sidenav').on('click', 'a', function (e) {
  e.preventDefault();
  var sideLinks = document.getElementsByClassName("usa-current");
  var i;

  if (sideLinks.length > 0 ) {
    for (i = 0; i < sideLinks.length; i++ ) {
      console.log(sideLinks[i])
      $(sideLinks[i]).removeClass("usa-current");
    }
  }
  // console.log(this.closest('li'));
  $( this ).closest('li').addClass('usa-current');
});
//var navHeight = function () {
//  $('.sidenav').css('height', (window.innerHeight - 50));
//};
//
//navHeight();
//
//$( window ).resize(function () {
//  navHeight();
//});


var sideNavLinks = document.getElementsByClassName("usa-sidenav__item");
var sections = document.getElementsByClassName("toolkit-section")

function updateSidenav() {
  var currentDistanceFromWindowTop = window.scrollY;

  var i;
  for (i = 0; i < sideNavLinks.length; i++ ) {
    var section = sections[i];
    var divDistanceFromTop = section.getBoundingClientRect().top;
    var divHeight = section.offsetHeight;
    console.log("step", i, "div distance to top: ", divDistanceFromTop, "current number of pixles to the top scoll position:", currentDistanceFromWindowTop,  "total humber of pixles to the bottom of the div:", (divDistanceFromTop + divHeight))
    if (divDistanceFromTop <= 250 && divDistanceFromTop + divHeight > 50 ) {
        sideNavLinks[i].classList.add("usa-current");
        // console.log(sideNavLinks[i])
    } else {
      sideNavLinks[i].classList.remove("usa-current");
    }
  }
};

// Add event listener to scroll
window.addEventListener("scroll", updateSidenav);
