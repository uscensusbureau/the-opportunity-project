var $ = require('jquery');

$('.toggle-tip-button').on('click', function () {
  console.log("clicking")
  if ( $(this).next('div').hasClass('modal-inactive')) {
    $(this).next('div').removeClass('modal-inactive').addClass('modal-active');
  } else {
    $(this).next('div').removeClass('modal-active').addClass('modal-inactive');
  }
});
