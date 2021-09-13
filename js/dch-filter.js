const [paginateProducts, paginator, slugify] = require('./filter-cards.js')

const searchField = document.getElementById('search-field')

const dchCheckboxes = document.querySelectorAll('.dch-checkbox input')
const resultsCountDisplay = document.getElementById('results-count')
const advancedFilters = {}
let filterCategory = 'all'

document.querySelectorAll('.dch__checkbox-group')
  .forEach(fieldset => {
    advancedFilters[fieldset.name] = []
  })

dchCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      advancedFilters[this.name].push(this.value)
    } else {
      advancedFilters[this.name].splice(
        advancedFilters[this.name].indexOf(this.value), 1)
    }
    filterDataSets()
  })
})

const categoryButtons = document.getElementsByClassName('dch__data-topic')
for (const container of categoryButtons) {
  container.addEventListener('click', e => {
    const selected = document.querySelector('.dch__data-topic.selected')
    if (selected) {
      selected.classList.remove('selected')
    }
    container.classList.add('selected')

    // toggle the description of the challenge below the filters
    const dataCardId = container.id
    filterCategory = dataCardId
    filterDataSets()
  })
}

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
  const searchTerm = searchField.value.toLowerCase()
  const datasets = document.getElementsByName('data-set-card')
  const activeAdvanced = Object.values(advancedFilters).filter(filter => filter.length > 0)
  const allFilters = activeAdvanced.length > 0 ? [...activeAdvanced[0], filterCategory] : [filterCategory]
  const filteredProducts = []
  for (const card of datasets) {
    // reset tag highlighting
    Array.from(card.getElementsByClassName('dch-card__tag')).forEach( tag => {
      tag.classList.remove('usa-tag--new')
    })

    if (card.getElementsByTagName('h2')[0]) {
      const dataName = card.getElementsByTagName('h2')[0].innerText
      const dataPS = card.getElementsByClassName('dataset__ps')[0].innerText
      const dataDescription = card.getElementsByTagName('p')[0].innerText
      const searchMatch = dataName.toLowerCase().includes(searchTerm) || dataPS.toLowerCase().includes(searchTerm) || dataDescription.toLowerCase().includes(searchTerm)
      const categoryMatch = dataPS.includes(filterCategory) || filterCategory === 'all'
      if (searchMatch && categoryMatch) {
        // apply advanced filtering
        let passesAdvanced = true
        Object.values(activeAdvanced).forEach(advancedFilter => {
          let hasCategory = false
          for (const filter of advancedFilter) {
            if (dataPS.includes(filter)) {
              hasCategory = true
              break
            }
          }
          if (!hasCategory) {
            passesAdvanced = false
          }
        })
        if (passesAdvanced) {
          card.classList.remove('pc-inactive')
          card.setAttribute('dch-passes-filter', true)
          filteredProducts.push(card)

          // highlight tags
          const tags = card.getElementsByClassName('dch-card__tag')
          const activeTags = Array.from(tags).filter(tag => {
            console.log(slugify(tag.innerText.toLowerCase()))
            return (allFilters.includes(slugify(tag.innerText.toLowerCase())))
          })
          activeTags.forEach(tag => tag.classList.add('usa-tag--new'))
        } else {
          hideDataset(card)
        }
      } else {
        hideDataset(card)
      }
    }
  }
  const numSetsFound = filteredProducts.length
  const suffix = numSetsFound === 1 ? '' : 's'
  resultsCountDisplay.innerText = `Found ${numSetsFound} dataset${suffix}.`

  paginator.setTotalItems(document.querySelectorAll('.data-set-card:not(.pc-inactive)').length)
  paginator.setCurrPage(0)
  paginateProducts(0, false, filteredProducts)
}

if (document.querySelector('body.page-datakit')) {
  console.log(paginator)
  filterDataSets()
}

/**
 * hides a dataset from the page because it doesn't have the relevant filters
 * @param {htmlElement} datasetCard element to hide
 */
const hideDataset = datasetCard => {
  datasetCard.classList.add('pc-inactive')
  datasetCard.setAttribute('dch-passes-filter', false)
}
