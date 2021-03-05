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

// if there's a search term in the URL params, set it and search with it
const params = new URLSearchParams( window.location.search )
if( params.has( 'search' )){
  const searchParam = params.get( 'search' )
  searchField.value = searchParam;
  searchTerm = searchParam;

  displayFilteredProducts();

  document.getElementById('all-products').scrollIntoView()
}


// search
if( prodSearchForm ){ 
  prodSearchForm.addEventListener( 'submit', e => {
    e.preventDefault();
    searchTerm = searchField.value;
    
    displayFilteredProducts();
});
}

/*
 * listener for value of the filter form changing.
 * Whenever someone changes any of the filters, we want to re-search.
 */
if( filterForm ){
  filterForm.addEventListener( 'change', e => {
    e.preventDefault()

    filterProducts()
  })
}

/**
 * Applies all current filters and displays appropriate products.
 */
function filterProducts() {
  filterTopics = getCheckedInputs( topicsInput )
  filterYears = getCheckedInputs( yearInput )
  filterAgencies = getCheckedInputs( agencyInput )

  displayFilteredProducts()
}

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
function displayFilteredProducts() {

  // const areFilters = filterTopics.length > 0 || filterYears.length > 0 || filterAgencies.length > 0;

  for (i = 0; i < productCards.length; i++) {
    const card = productCards[ i ];
    const productName = card.getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
    const prodDesc = card.getElementsByTagName('p')[0].innerText;
    const prodProblems = card.getElementsByTagName('p')[1].innerText;
    const productNameSlugified = productName.replace(`'`,'-').split('.').join("-").split(':').join("-");
    const productYear = card.getElementsByTagName('h3')[ 0 ].innerText;
    const productElement = card.getElementsByTagName('h4')[ 0 ]
    const productTopic = productElement ? productElement.innerHTML : '';
    const productAgency = card.getElementsByTagName('h5')[ 0 ].innerText.toLowerCase().split(' ').join("-");
    
    const searchMatch = productNameSlugified.includes(searchTerm) || prodDesc.includes( searchTerm ) || prodProblems.includes( searchTerm )

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

/** 
 *  reset filters
 */
if( document.getElementById( 'reset-filter' )) {
  document.getElementById( 'reset-filter' ).addEventListener( 'click', e => {
    e.preventDefault();
    var selectedValues = document.getElementsByName('filter-checkbox');
    for (i = 0; i < selectedValues.length; i++) {
      selectedValues[i].checked = false;
    }

    // close the accordions
    const buttons = document.getElementsByClassName('product-filter-button');
    for( const button of buttons ){
      button.setAttribute('aria-expanded', 'false')
    }
    // hide the dropdowns
    [ topicsInput, yearInput, agencyInput ].forEach( input => 
      input.setAttribute('hidden', "")
    )
    
    filterProducts();
  });
}

/**
 * Slugify a string
 * from https://lucidar.me/en/web-dev/how-to-slugify-a-string-in-javascript/
 **/ 
const slugify = str => {
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str;
}


$('.usa-card').on('click', function () {
  $( this ).next('.modal').removeClass('modal-inactive').addClass('modal-active');
});

$(".close").on("click", function () {
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});

$('.data-card-group').on('click', function (e) {
    const closestCard = e.target.closest('li');
    if( closestCard ){
      var dataCardId = closestCard.id;
      // toggle the description of the challenge at top of page
      $('.modal-active').addClass('modal-inactive');
      $('.modal-active').removeClass('modal-active');
      $("#modal-" + dataCardId).removeClass('modal-inactive').addClass('modal-active');

      var datasets = document.getElementsByClassName("data-set-card");
      if (dataCardId == "all") {
        for (i = 0; i < datasets.length; i++ ) {
          dataName = datasets[ i ].getElementsByTagName('h2')[ 0 ].innerText
          dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace("'", '').replace('.', '-').replace(':', '').split(" ").join("-"));
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
        }
      } else {
        for (i = 0; i < datasets.length; i++ ) {
          dataName = datasets[ i ].getElementsByTagName('h2')[ 0 ].innerText
          dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').replace('.', '-').replace('u-s.', 'u-s-').replace(',', '-').replace('&', '').replace("'", '').split(" ").join("-"));
          dataNameSlugified = dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').replace('.', '-').replace('u-s.', 'u-s-').replace(',', '-').replace('&', '').replace("'", '').split(" ").join("-");
          dataCategory = datasets[ i ].getElementsByTagName('h3')[ 0 ].innerText;
          dataCategoryArray = dataCategory.toLowerCase().replace('(', '').replace(')', '').split(' ');
          if ( dataCategoryArray.includes(dataCardId) ) {
            $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
          } else {
            $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
          }
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
        dataNameSlugified = dataName.toLowerCase().replace('(', ' ').replace(')', '').replace('–⁠', ' ').replace("'", '').replace('-', ' ').replace('&', '').replace('*', ' ').split(" ").join("-");
        if (dataName.toLowerCase().includes(filter) || dataPS.toLowerCase().includes(filter) || dataDescription.toLowerCase().includes(filter)) {
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
        } else {
          $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
        }
      }
    }
  });
