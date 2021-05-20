const $ = require('jquery')

/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
const calculateAnchorPosition = function (hash) {
  const anchor = $('#' + hash)
  let topOffset = 0
  if (anchor.length === 0) {
    return topOffset
  }

  const navPadding = parseInt($('.sidenav').css('padding-top'), 10)
  const anchorPadding = parseInt(anchor.css('padding-top'), 10)
  const scrollMarginTop = parseInt(anchor.find('h1').css('scroll-margin-top'), 10)

  // start with the height of the header
  topOffset = $('.usa-nav').first().outerHeight() || 0
  // subtract the diffence in padding between nav top and anchor
  topOffset = topOffset - (anchorPadding + scrollMarginTop - navPadding)

  // anchor should now align with first item inside nav
  return anchor.offset().top - topOffset
}

module.exports = calculateAnchorPosition
