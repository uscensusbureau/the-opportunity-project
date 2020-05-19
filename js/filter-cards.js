// Update display to seach and filter products
var $ = require('jquery');
var slugify = require('slugify')

// console.log("connected!")

$('#product-search-form').submit(function (e) {
  e.preventDefault();
  var filter = $( '#search-field').val();
  var products = document.getElementsByName('productCard');
  console.log(products)
  for (i = 0; i < products.length; i++) {
    if (products[ i ].getElementsByTagName('h2')[ 0 ]) {
      productName = products[ i ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (productName.includes(filter)) {
        $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        console.log(productName);
      } else {
        $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        console.log("no match", productNameSlugified);
      }
    }
  }
});

$('.usa-card').on('click', function () {
  $( this ).next('.modal').removeClass('modal-inactive').addClass('modal-active');
});

$(".close").on("click", function () {
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});

//
// $(window).onclick = function(e) {
//   if (e.target !== $("#modal")) {
//     $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
//   }
// }
