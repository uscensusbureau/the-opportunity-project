const searchField = document.getElementById('search-field')
let filterCategory = 'all'

const categoryButtons = document.getElementsByClassName('dch__topic-container')
for (const container of categoryButtons) {
  container.addEventListener('click', e => {
    document.querySelector('.dkh__data-topic.selected').classList.remove('selected')
    const button = container.getElementsByClassName('dkh__data-topic')[0]
    button.classList.add('selected')

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
        card.classList.remove('pc-inactive')
      } else {
        card.classList.add('pc-inactive')
      }
    }
  }
}
