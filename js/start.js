'use strict';

require('./form-disable');
require('./scroll-to-top-for-hash');
require('./sidenav');
require('./filter-cards');
require('./toggle-problem-statements.js');
require('./vendor/stickyfill.min.js');


// Initialize sticky fill
var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
  Stickyfill.add(stickyElements[ i ]);
}
