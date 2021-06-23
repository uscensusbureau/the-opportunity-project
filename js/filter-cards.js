const $ = require('jquery')

const prodSearchForm = document.getElementById('product-search-form')
const searchField = document.getElementById('search-field')
const filterForm = document.getElementById('product-filter-form')
const topicsInput = document.getElementById('topics')
const yearInput = document.getElementById('year')
const agencyInput = document.getElementById('partner-agency')
const filterInputs = [topicsInput, yearInput, agencyInput]
const productCards = document.getElementsByName('productCard')

const CARDS_PER_PAGE = 101

// define filters
let searchTerm = ''
let filterTopics = []
let filterYears = []
let filterAgencies = []

const filters = [
  { id: 'topic', checked: filterTopics },
  { id: 'year', checked: filterYears },
  { id: 'partner-agency', checked: filterAgencies }
]

let filteredProducts = document.querySelectorAll('.product-card:not(.pc-inactive)')
console.log('num filtered products: ' + filteredProducts.length)
// paginateProducts(filteredProducts, 1)

// if there's a search term in the URL params, set it and search with it
const params = new URLSearchParams(window.location.search)
if (window.location.search) {
  const searchParam = params.get('search')
  if (searchParam) {
    searchField.value = searchParam
    searchTerm = searchParam
  }

  for (const filter of filters) {
    const terms = params.getAll(filter.id)
    for (const term of terms) {
      console.log(term)
      filter.checked.push(term)
      document.getElementById(term.replaceAll(' ', '-')).checked = true
    }
  }

  setTimeout(displayFilteredProducts, 500)
  // displayFilteredProducts()

  document.getElementById('all-products').scrollIntoView()
}

// search
if (prodSearchForm) {
  prodSearchForm.addEventListener('submit', e => {
    e.preventDefault()
    onSearch()
    displayFilteredProducts()
  })

  // add listener for clicking the 'x' in search input
  searchField.addEventListener('search', e => {
    if (searchField.value === '') {
      onSearch()
      displayFilteredProducts()
    }
  })
}

/*
 * listener for value of the filter form changing.
 * Whenever someone changes any of the filters, we want to re-search.
 */
if (filterForm) {
  filterForm.addEventListener('change', e => {
    e.preventDefault()

    filterProducts()
  })

  // add listener to close inputs when clicking outside
  const handleClosure = event => {
    for (const container of document.getElementsByClassName('product-filter__container')) {
      if (!container.contains(event.target)) {
        const button = container.getElementsByClassName('product-filter__button')[0]
        const options = container.getElementsByClassName('dropdown-menu')[0]

        button.setAttribute('aria-expanded', 'false')
        options.setAttribute('hidden', '')
      }
    }
  }

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
}

function onSearch () {
  searchTerm = searchField.value
  filterProducts()
}

/**
 * Applies all current filters and displays appropriate products.
 */
function filterProducts () {
  const currSearch = searchTerm ? `?search=${searchTerm}` : '?'
  const searchParams = new URLSearchParams(currSearch)
  filterTopics = getCheckedInputs(topicsInput)
  appendToURLSearchParams(searchParams, 'topic', filterTopics)

  filterYears = getCheckedInputs(yearInput)
  appendToURLSearchParams(searchParams, 'year', filterYears)

  filterAgencies = getCheckedInputs(agencyInput)
  appendToURLSearchParams(searchParams, 'partner-agency', filterAgencies)

  let newURL = window.location.origin + window.location.pathname
  if (searchParams.toString()) {
    newURL += `?${searchParams.toString()}`
  }
  window.history.replaceState(null, document.title, newURL)
  displayFilteredProducts()
}

/** returns array of values of all checked inputs contained within a given div */
const getCheckedInputs = container => {
  const inputEls = Array.from(container.getElementsByTagName('input'))
  return inputEls.filter(input => input.checked)
    .map(checkedInput => checkedInput.value)
}
/** adds all values of given array to URLSearchParams object with given key */
const appendToURLSearchParams = (urlParams, key, values) => {
  for (const value of values) {
    urlParams.append(key, value)
  }
}

/**
 * Searches through all product cards.
 * Hides those that don't match the current filters.
 * Shows those that do match the current filters.
 *
 * IMPROVEMENT: Rather than looping DOM objects, filter through JSON
 */
function displayFilteredProducts () {
  filteredProducts = []
  searchTerm = searchTerm.toLowerCase()
  for (let i = 0; i < productCards.length; i++) {
    const card = productCards[i]
    const productName = card.getElementsByTagName('h2')[0].innerText.toLowerCase()
    const prodDesc = slugify(card.getElementsByTagName('p')[0].innerText)
    const prodProblems = card.getElementsByTagName('p')[1].innerText
    const productNameSlugified = productName.replace('\'', '-').split('.').join('-').split(':').join('-')
    let productYear = ''
    if (card.getElementsByTagName('h3') && card.getElementsByTagName('h3')[0]) {
      productYear = card.getElementsByTagName('h3')[0].innerText
    }
    const productElement = card.getElementsByTagName('h4')[0]
    const productTopic = productElement ? productElement.innerHTML : ''
    const productAgency = card.getElementsByTagName('h5')[0]
      ? card.getElementsByTagName('h5')[0].innerText.toLowerCase().split(' ').join('-')
      : ''
    const productDatasets = card.getElementsByClassName('product-data-sets')[0]
      ? card.getElementsByClassName('product-data-sets')[0].innerText.toLowerCase().split(' ').join('-')
      : ''

    const searchMatch = productNameSlugified.includes(searchTerm) || prodDesc.includes(searchTerm) ||
      prodProblems.includes(searchTerm) || productAgency.includes(searchTerm) || productDatasets.includes(searchTerm)

    const topicMatches = checkFilterMatch(productTopic, filterTopics)
    const yearMatches = checkFilterMatch(productYear, filterYears)
    const agencyMatches = checkFilterMatch(productAgency, filterAgencies)

    const filterMatch = topicMatches && yearMatches && agencyMatches

    card.classList.remove('pc-active')
    card.classList.add('pc-inactive')

    if (searchMatch && filterMatch) {
      filteredProducts.push(card)
    }
  }

  const results = document.getElementById('results-count')
  const numProductsFound = filteredProducts.length
  results.innerText = numProductsFound > 0
    ? `Found ${numProductsFound} products.`
    : 'No products found.'

  paginateProducts(filteredProducts, 0)
}

function checkFilterMatch (productValue, filterArray) {
  return filterArray.length === 0 ||
    filterArray.some(filterVal => {
      return productValue.toLowerCase().split(' ').join('-')
        .includes(filterVal.toLowerCase().split(' ').join('-'))
    })
}

/**
 * Hides or shows product cards based on what page we're on
 * remove pc-inactive class for all cards on current page
 * @param {array} products array of products to paginate
 * @param {int} pageIndex page of products to show
 */
function paginateProducts (products, pageIndex) {
  console.log('paginating products')
  const showStart = pageIndex * CARDS_PER_PAGE
  const showEnd = (pageIndex + 1) * CARDS_PER_PAGE
  console.log({ pageIndex, showStart, showEnd })
  products.forEach((card, i) => {
    if (i >= showStart && i < showEnd) {
      card.classList.add('pc-active')
      card.classList.remove('pc-inactive')
    } else {
      card.classList.remove('pc-active')
      card.classList.add('pc-inactive')
    }
  })
}

/**
 *  reset filters
 */
if (document.getElementById('reset-filter')) {
  document.getElementById('reset-filter').addEventListener('click', e => {
    e.preventDefault()
    const selectedValues = document.getElementsByName('filter-checkbox')
    for (let i = 0; i < selectedValues.length; i++) {
      selectedValues[i].checked = false
    }

    closeAccordions()

    // clear the search
    searchTerm = ''
    searchField.value = searchTerm
    onSearch()

    filterProducts()
  })
}

// close the accordions
const closeAccordions = () => {
  const buttons = document.getElementsByClassName('product-filter-button')
  for (const button of buttons) {
    button.setAttribute('aria-expanded', 'false')
  }
  // hide the dropdowns
  filterInputs.forEach(input =>
    input.setAttribute('hidden', '')
  )
}

/**
 * Slugify a string
 * from https://lucidar.me/en/web-dev/how-to-slugify-a-string-in-javascript/
 **/
const slugify = str => {
  str = str.replace(/^\s+|\s+$/g, '')

  // Make the string lowercase
  str = str.toLowerCase()

  // Remove accents, swap ñ for n, etc
  const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;'
  const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  // Remove invalid chars
  str = str.replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-')

  return str
}

const modal = document.getElementById('product-modal')
const cards = document.getElementsByClassName('product-card')
Array.from(cards).forEach(card => {
  card.addEventListener('click', e => {
    const cardTitle = card.getElementsByClassName('usa-card__heading')[0].innerHTML

    modal.getElementsByClassName('usa-card__header')[0].getElementsByTagName('h3')[0].innerHTML = cardTitle

    const pic = card.getElementsByTagName('picture')[0]
    if (pic) {
      const srcset = pic.children[0].srcset
      const imgSrc = pic.children[1].src
      const modalPic = modal.getElementsByTagName('picture')[0]
      if (modalPic) {
        modalPic.children[0].srcset = srcset
        modalPic.children[1].src = imgSrc
        modalPic.children[1].alt = pic.children[1].alt
      }
    }

    modal.getElementsByClassName('modal-tech-team')[0].innerText =
      card.getElementsByClassName('product-tech-team')[0].innerText
    modal.getElementsByClassName('modal-data-sets')[0].innerText =
      card.getElementsByClassName('product-data-sets')[0].innerText
    modal.getElementsByClassName('modal-desc')[0].innerText =
      card.getElementsByClassName('product-desc')[0].innerText

    const href = card.getElementsByClassName('product-link')[0].innerText
    modal.getElementsByClassName('modal-link')[0].href = href

    modal.classList.remove('modal-inactive')
    modal.classList.add('modal-active')
  })
})

const closeModal = () => {
  modal.classList.remove('modal-active')
  modal.classList.add('modal-inactive')
}

$('.close').on('click', closeModal)

if (modal) {
  const checkModalClose = event => {
    if (modal.contains(event.target)) {
      const modalContent = modal.getElementsByClassName('usa-card')[0]
      if (!modalContent.contains(event.target)) {
        closeModal()
      }
    }
  }
  window.addEventListener('click', checkModalClose)
  window.addEventListener('focusin', checkModalClose)
}

$('.data-card-group').on('click', function (e) {
  if (e.target) {
    const closestCard = e.target.closest('li')
    if (closestCard) {
      for (const topicCard of document.getElementsByClassName('dkh__data-topic')) {
        topicCard.classList.remove('selected')
      }
      closestCard.getElementsByClassName('dkh__data-topic')[0].classList.add('selected')
      const dataCardId = closestCard.id
      // toggle the description of the challenge at top of page
      $('.modal-active').addClass('modal-inactive')
      $('.modal-active').removeClass('modal-active')
      $('#modal-' + dataCardId).removeClass('modal-inactive').addClass('modal-active')

      const datasets = document.getElementsByClassName('data-set-card')
      if (dataCardId === 'all') {
        for (let i = 0; i < datasets.length; i++) {
          const dataName = datasets[i].getElementsByTagName('h2')[0].innerText
          const dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace("'", '').replace('.', '-').replace(':', '').split(' ').join('-'))
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive')
        }
      } else {
        for (let i = 0; i < datasets.length; i++) {
          const dataName = datasets[i].getElementsByTagName('h2')[0].innerText
          let dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').replace('.', '-').replace('u-s.', 'u-s-').replace(',', '-').replace('&', '').replace("'", '').split(' ').join('-'))
          dataNameSlugified = dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').replace('.', '-').replace('u-s.', 'u-s-').replace(',', '-').replace('&', '').replace("'", '').split(' ').join('-')
          const dataCategory = datasets[i].getElementsByTagName('h3')[0].innerText
          const dataCategoryArray = dataCategory.toLowerCase().replace('(', '').replace(')', '').split(' ')
          if (dataCategoryArray.includes(dataCardId)) {
            $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive')
          } else {
            $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive')
          }
        }
      }
    }
  }
})

if (document.getElementById('data-search-form')) {
  document.getElementById('data-search-form').addEventListener('submit', e => {
    e.preventDefault()
    filterDataSets()
  })

  if (searchField) {
    searchField.addEventListener('search', e => {
      if (searchField.value === '') {
        filterDataSets()
      }
    })
  }
}

function filterDataSets () {
  const filter = $('#search-field').val()
  const dataSets = document.getElementsByName('data-set-card')
  for (let i = 0; i < dataSets.length; i++) {
    if (dataSets[i].getElementsByTagName('h2')[0]) {
      const dataName = dataSets[i].getElementsByTagName('h2')[0].innerText
      const dataPS = dataSets[i].getElementsByTagName('h3')[0].innerText
      const dataDescription = dataSets[i].getElementsByTagName('p')[0].innerText
      const dataNameSlugified = slugify(dataName.toLowerCase())
      if (dataName.toLowerCase().includes(filter) || dataPS.toLowerCase().includes(filter) || dataDescription.toLowerCase().includes(filter)) {
        $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive')
      } else {
        $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive')
      }
    }
  }
}
