// Update display to seach and filter products
var $ = require('jquery');

$('#product-search-form').submit(function (e) {
  e.preventDefault();
  var filter = $( '#search-field').val();
  var products = document.getElementsByName('productCard');
  for (i = 0; i < products.length; i++) {
    if (products[ i ].getElementsByTagName('h4')[ 0 ]) {
      productName = products[ i ].getElementsByTagName('h4')[ 0 ].innerText.toLowerCase();
      productNameSlugified = productName.replace(/\s/g, '-');
      if (productName.includes(filter)) {
        $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        console.log(productName);
      } else {
        $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        console.log("no match", productName);
      }
    }
  }
});

$('#product-filter-form').submit(function (e) {
  e.preventDefault();
  var filter = $( '#search-field').val();
  var products = document.getElementsByName('productCard');
  for (i = 0; i < products.length; i++) {
    if (products[ i ].getElementsByTagName('h4')[ 0 ]) {
      productName = products[ i ].getElementsByTagName('h4')[ 0 ].innerText.toLowerCase();
      productNameSlugified = productName.replace(/\s/g, '-');
      if (productName.includes(filter)) {
        $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        console.log(productName);
      } else {
        $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        console.log("no match", productName);
      }
    }
  }
});
