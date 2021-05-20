// Update display to seach and filter products
const $ = require('jquery')

$('#show-modal').on('click', function () {
  $(this).next('.dkh-modal').removeClass('modal-inactive').addClass('modal-active')
})

$('.dkh-modal__contents-close').on('click', function () {
  $('.modal-active').removeClass('modal-active').addClass('modal-inactive')
})
