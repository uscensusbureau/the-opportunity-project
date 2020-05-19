// Update display to seach and filter products
var $ = require('jquery');

console.log("connected!")
//
// $('#product-search-form').submit(function (e) {
//   e.preventDefault();
//   var filter = $( '#search-field').val();
//   var products = document.getElementsByName('productCard');
//   for (i = 0; i < products.length; i++) {
//     if (products[ i ].getElementsByTagName('h4')[ 0 ]) {
//       productName = products[ i ].getElementsByTagName('h4')[ 0 ].innerText.toLowerCase();
//       productNameSlugified = productName.replace(/\s/g, '-');
//       if (productName.includes(filter)) {
//         $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
//         console.log(productName);
//       } else {
//         $('#product-card-' + productNameSlugified).addClass('pc-inactive');
//         console.log("no match", productName);
//       }
//     }
//   }
// });

$('.usa-card').on('click', function () {
  $( this ).next('.modal').removeClass('modal-inactive').addClass('modal-active');
});



$(".close").on("click", function () {
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});

$(window).onclick = function(e) {
  if (e.target !== $("#modal")) {
    $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
  }
}
