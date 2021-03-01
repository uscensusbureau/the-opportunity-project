/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
var calculateAnchorPosition = function (hash) {
  console.log('calculating anchor of ', hash)
  var anchor        = $('#' + hash);
  var topOffset     = 0;
  if (anchor.length === 0) {
    return topOffset;
  }

  var navPadding    = parseInt($('.sidenav').css('padding-top'), 10);
  var anchorPadding = parseInt( anchor.css('padding-top'), 10);
  var scrollMarginTop = parseInt( anchor.find('h1').css( 'scroll-margin-top'), 10);
  console.log({anchorPadding, scrollMarginTop})

  //start with the height of the header
  topOffset = $('.usa-nav').first().outerHeight() || 0;
  //subtract the diffence in padding between nav top and anchor
  topOffset = topOffset - (anchorPadding + scrollMarginTop - navPadding);

  //anchor should now align with first item inside nav
  return anchor.offset().top - topOffset;
};
