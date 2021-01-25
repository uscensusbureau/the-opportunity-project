// Update display to seach and filter products
var $ = require('jquery');
var slugify = require('slugify');

const prodSearchForm = document.getElementById( 'product-search-form' );
const searchField = document.getElementById( 'search-field' );
const filterForm = document.getElementById('product-filter-form')
const topicsInput = document.getElementById('topics')
const yearInput = document.getElementById('year')
const agencyInput = document.getElementById('agency')
const productCards = document.getElementsByName('productCard');

// define filters
var searchTerm = '';
let filterTopics = []
let filterYears = []
let filterAgencies = []


// search
prodSearchForm.addEventListener( 'submit', e => {
  e.preventDefault();
  searchTerm = searchField.value;
  
  filterProducts();
});

/*
 * listener for value of the filter form changing.
 * Whenever someone changes any of the filters, we want to re-search.
 */
filterForm.addEventListener( 'change', e => {
  e.preventDefault()

  filterTopics = getCheckedInputs( topicsInput )
  console.log({filterTopics})
  filterYears = getCheckedInputs( yearInput )
  console.log({filterYears})
  filterAgencies = getCheckedInputs( agencyInput )
  console.log({filterAgencies})

  filterProducts()
})

/** returns array of values of all checked inputs contained within a given div */
const getCheckedInputs = container => {
  const inputEls = Array.from(container.getElementsByTagName('input'))
  return inputEls.filter( input => input.checked )
    .map( checkedInput => checkedInput.value )
}

/**
 * Searches through all product cards.
 * Hides those that don't match the current filters.
 * Shows those that do match the current filters.
 * 
 * IMPROVEMENT: Rather than looping DOM objects, filter through JSON
 */
const filterProducts = () => {

  // const areFilters = filterTopics.length > 0 || filterYears.length > 0 || filterAgencies.length > 0;

  for (i = 0; i < productCards.length; i++) {
    const card = productCards[ i ];
    const productName = card.getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
    const prodDesc = card.getElementsByTagName('p')[0].innerText;
    const productNameSlugified = productName.replace(`'`,'-').split('.').join("-").split(':').join("-");
    const productYear = card.getElementsByTagName('h3')[ 0 ].innerText;
    const productTopic = card.getElementsByTagName('h4')[ 0 ].innerText;
    const productAgency = card.getElementsByTagName('h5')[ 0 ].innerText.toLowerCase().split(' ').join("-");
    
    const searchMatch = productNameSlugified.includes(searchTerm) || prodDesc.includes( searchTerm )

    const topicMatches = checkFilterMatch( productTopic, filterTopics )
    const yearMatches = checkFilterMatch( productYear, filterYears )
    const agencyMatches = checkFilterMatch( productAgency, filterAgencies )

    const filterMatch = topicMatches && yearMatches && agencyMatches
    
    if( searchMatch && filterMatch ){
      card.classList.remove('pc-inactive');
    } else {
      card.classList.add('pc-inactive');
    }
  }
}

function checkFilterMatch( productValue, filterArray ) {
  return filterArray.length === 0 || 
    filterArray.some( filterVal => {
      return productValue.toLowerCase().split(' ').join("-")
        .includes( filterVal.toLowerCase().split(' ').join("-") );
  })
}


// filter
$('#product-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var products = document.getElementsByName('productCard');
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < products.length; j++ ) {
      productYear = products[ j ].getElementsByTagName('h3')[ 0 ].innerText;
      productTopic = products[ j ].getElementsByTagName('h4')[ 0 ].innerText;
      productAgency = products[ j ].getElementsByTagName('h5')[ 0 ].innerText.toLowerCase().split(' ').join("-");
      productName = products[ j ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (selectedValues[ i ].checked == true ) {
        console.log(productAgency, filter)
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
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace("'", '').replace('.', '-').replace(':', '').split(" ").join("-"));
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
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', ' ').replace(')', '').replace('–⁠', ' ').replace("'", '').replace('-', ' ').replace('&', '').replace('*', ' ').split(" ").join("-"));
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
