'use strict';

// capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
  var ENTER = 13;
  if (e.which === ENTER) {
    $(this).data('keypress', true);
  }
});

var sideNavLinks = document.getElementsByClassName("usa-sidenav__item");
var sections = document.getElementsByClassName("toolkit-section")

const highlightAnchorNavigation = ( anchorLinks, pageDivs, highlightClass ) => {
  let lowestMatch = pageDivs[ 0 ]; // hack for our-process not highlighting above the fold
  var i;
  for (i = 0; i < anchorLinks.length; i++ ) {
    var section = pageDivs[i];
    var divDistanceFromTop = section.getBoundingClientRect().top;

    // find 
    if (divDistanceFromTop <= 250 ){ // && divDistanceFromTop + divHeight > 50 ) {
      lowestMatch = section;
    }
  }

  let matchingLink = anchorLinks[0]
  for( i = 0; i < anchorLinks.length; i++ ){
    let section = pageDivs[i];
    if( section == lowestMatch ){
      anchorLinks[i].classList.add( highlightClass );
      matchingLink = anchorLinks[ i ]
    } else {
      anchorLinks[i].classList.remove( highlightClass );
    }
  }

  return matchingLink;
};

// Add event listener to scroll
window.addEventListener("scroll", e => {
  highlightAnchorNavigation( sideNavLinks, sections, "usa-current" )
});

module.exports = highlightAnchorNavigation;