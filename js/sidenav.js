'use strict';

/* Firefox needs html, others need body */
var root = $('body, html');

// capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
  var ENTER = 13;
  if (e.which === ENTER) {
    $(this).data('keypress', true);
  }
});

var sideNavLinks = document.getElementsByClassName("usa-sidenav__item");
var sections = document.getElementsByClassName("toolkit-section")

const highlightAnchorNavigation = ( anchorLinks, pageDivs, highlightClass, printDebug=false ) => {
  let lowestMatch;
  let closestTo250 = Number.MAX_SAFE_INTEGER;
  var i;
  for (i = 0; i < anchorLinks.length; i++ ) {
    var section = pageDivs[i];
    var divDistanceFromTop = section.getBoundingClientRect().top;
    var divHeight = section.offsetHeight;
    if( printDebug ){
      console.log( anchorLinks[i].innerHTML, divDistanceFromTop, divHeight )
    }
    // find 
    if (divDistanceFromTop <= 250 ){ // && divDistanceFromTop + divHeight > 50 ) {
      lowestMatch = section;
      console.log('matched on ' + i)
    }
  }
  for( i = 0; i < anchorLinks.length; i++ ){
    let section = pageDivs[i];
    if( section == lowestMatch ){
      anchorLinks[i].classList.add( highlightClass );
    } else {
      anchorLinks[i].classList.remove( highlightClass );
    }
  }
};

// Add event listener to scroll
window.addEventListener("scroll", e => {
  highlightAnchorNavigation( sideNavLinks, sections, "usa-current", false )
});

module.exports = highlightAnchorNavigation;