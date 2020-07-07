// Update display to seach and filter products
var $ = require('jquery');
var slugify = require('slugify');

// search
$('#product-search-form').submit(function (e) {
  e.preventDefault();
  var filter = $( '#search-field').val();
  var products = document.getElementsByName('productCard');
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

// filter
$('#product-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var products = document.getElementsByName('productCard');
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < products.length; j++ ) {
      productYear = products[ j ].getElementsByTagName('h3')[ 0 ].innerText;
      productTopic = products[ j ].getElementsByTagName('h4')[ 0 ].innerText;
      productAgency = products[ j ].getElementsByTagName('h5')[ 0 ].innerText;
      productName = products[ j ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (selectedValues[ i ].checked == true ) {
        var filter = selectedValues[ i ].value.toLowerCase().split(' ').join("-");
        if ( productTopic.includes(filter) || filter == productYear || productAgency.includes(filter)) {
          $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        } else {
          $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        }
      }
    }
  }
});

// reset filter

$('#reset-filter').click(function (e) {
  var selectedValues = document.getElementsByName('filter-checkbox');
  for (i = 0; i < selectedValues.length; i++) {
    selectedValues[i].checked = false;
  }
  var products = document.getElementsByName('productCard');
  for (i = 0; i < products.length; i++) {
    productName = products[ i ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
    productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
    $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
  }
});

$('.usa-card').on('click', function () {
  $( this ).next('.modal').removeClass('modal-inactive').addClass('modal-active');
});

$(".close").on("click", function () {
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});

$('.data-card-group').on('click', function (e) {
    var dataCard = e.target.closest("li").id;
    // console.log(dataCard)
    // toggle the description of the challenge at top of page
    $('.modal-active').addClass('modal-inactive');
    $('.modal-active').removeClass('modal-active');
    $("#modal-" + dataCard).removeClass('modal-inactive').addClass('modal-active');

    var datasets = document.getElementsByClassName("data-set-card");
    if (dataCard == "all") {
      for (i = 0; i < datasets.length; i++ ) {
        dataName = datasets[ i ].getElementsByTagName('h2')[ 0 ].innerText
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace('.', '-').replace(':', '').split(" ").join("-"));
        $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
      }
    } else {
      for (i = 0; i < datasets.length; i++ ) {
        dataName = datasets[ i ].getElementsByTagName('h2')[ 0 ].innerText
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').replace('.', '-').replace('u-s.', 'u-s-').replace(',', '-').replace('&', '').replace("'", '').split(" ").join("-"));
        // console.log(dataNameSlugified)
        dataCategory = datasets[ i ].getElementsByTagName('h3')[ 0 ].innerText;
        dataCategoryArray = dataCategory.toLowerCase().replace('(', '').replace(')', '').split(' ');
        // console.log(dataCategoryArray, dataCard);
        if ( dataCategoryArray.includes(dataCard) ) {
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
        } else {
          $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
        }
      }
    }
  });



  $('#data-search-form').submit(function (e) {
    e.preventDefault();
    var filter = $( '#search-field').val();
    var dataSets = document.getElementsByName('data-set-card');
    for (i = 0; i < dataSets.length; i++) {
      if (dataSets[ i ].getElementsByTagName('h2')[ 0 ]) {
        dataName = dataSets[ i ].getElementsByTagName('h2')[ 0 ].innerText
        dataPS = dataSets[ i ].getElementsByTagName('h3')[ 0 ].innerText
        dataDescription = dataSets[ i ].getElementsByTagName('p')[ 0 ].innerText
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', ' ').replace(')', '').replace('–⁠', ' ').replace('-', ' ').replace('&', '').replace('*', ' ').split(" ").join("-"));
        if (dataName.toLowerCase().includes(filter) || dataPS.toLowerCase().includes(filter) || dataDescription.toLowerCase().includes(filter)) {
          // console.log(dataNameSlugified);
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
        } else {
          // console.log("mismatch", dataNameSlugified);
          $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
        }
      }
    }
  });
