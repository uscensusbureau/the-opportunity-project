var $ = require('jquery');

$('.toggle-tip-button').on('click', function () {
  // console.log("clicking")
  $( this ).next('div').removeClass('modal-inactive').addClass('modal-active');
});
