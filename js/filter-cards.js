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
      } else {
        $('#product-card-' + productNameSlugified).addClass('pc-inactive');
      }
    }
  }
});

$('#product-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var products = document.getElementsByName('productCard');
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < products.length; j++ ) {
      productTopic = products[ j ].getElementsByTagName('h4')[ 0 ].innerText;
      productName = products[ j ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (selectedValues[ i ].checked == true ) {
        var filter = selectedValues[ i ].value
        if (filter == productTopic) {
          console.log("match", filter, productTopic, productNameSlugified)
          $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        } else {
          console.log("no match", filter, productTopic, productNameSlugified)
          $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        }
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
