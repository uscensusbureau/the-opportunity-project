// Update display to seach and filter products
var $ = require('jquery');

$('#show-modal').on('click', function () {
  console.log("clicked modal")
  $( this ).next('.dkh-modal').removeClass('modal-inactive').addClass('modal-active');
});

$(".dkh-modal__contents-close").on("click", function () {
  console.log("closing")
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});
