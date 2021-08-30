const searchField = document.getElementById('search-field')
let filterCategory = 'all'
const dchCheckboxes = document.querySelectorAll('.dch-checkbox input')
const advancedFilters = {}

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
    console.log('CLICK')
    const selected = document.querySelector('.dch__data-topic.selected')
    if (selected) {
      selected.classList.remove('selected')
    }
    container.classList.add('selected')

    // toggle the description of the challenge below the filters
    const dataCardId = container.id
    const activeModal = document.querySelector('.modal-active')
    if (activeModal) {
      activeModal.classList.add('modal-inactive')
      activeModal.classList.remove('modal-active')
    }
    const newActiveModal = document.querySelector(`#modal-${dataCardId}`)
    if (newActiveModal) {
      newActiveModal.classList.add('modal-active')
      newActiveModal.classList.remove('modal-inactive')
    }
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
  for (const card of datasets) {
    if (card.getElementsByTagName('h2')[0]) {
      const dataName = card.getElementsByTagName('h2')[0].innerText
      const dataPS = card.getElementsByClassName('dataset__ps')[0].innerText
      const dataDescription = card.getElementsByTagName('p')[0].innerText

      const searchMatch = dataName.toLowerCase().includes(searchTerm) || dataPS.toLowerCase().includes(searchTerm) || dataDescription.toLowerCase().includes(searchTerm)
      const categoryMatch = dataPS.includes(filterCategory) || filterCategory === 'all'
      if (searchMatch && categoryMatch) {
        // apply advanced filtering
        let passesAdvanced = true
        for (const advancedFilter in advancedFilters) {
          let hasCategory = false
          for (const filter in advancedFilter) {
            if (dataPS.includes(filter)) {
              hasCategory = true
              break
            }
          }
          if (!hasCategory) {
            passesAdvanced = false
            break
          }
        }
        if (passesAdvanced) {
          card.classList.remove('pc-inactive')
        } else {
          card.classList.add('pc-inactive')
        }
      } else {
        card.classList.add('pc-inactive')
      }
    }
  }
}
