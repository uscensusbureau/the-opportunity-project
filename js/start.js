'use strict';

require('./form-disable');
require('./calculate-anchor-position');
require('./scroll-to-top-for-hash');
require('./sidenav');
require('./show-more-less');
require('./ps-show-more-less');
require('./filter-cards');
require('./toggle');
require('./data-kit-modal');
require('./sprint-nav-highlight');
require('./toggle-problem-statements.js');
require('./return-to-top')
require('./vendor/stickyfill.min.js');


// Initialize sticky fill
var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
  Stickyfill.add(stickyElements[ i ]);
}
