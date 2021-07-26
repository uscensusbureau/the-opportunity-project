const base = 'http://localhost:4000/showcase/'
const searchField = '#search-field'
const searchForm = '#product-search-form'
const activeQuery = '.product-card:not(.pc-inactive)'
const resultsField = '#results-count'
const resetButton = '#reset-filter'

const expectedSearchResults = [
  { searchTerm: 'naip', results: 4},
  { searchTerm: 'bananarama', results: 0 },
  { searchTerm: 'maps', results: 2 },
  { searchTerm: 'covid', results: 13 },
  { searchTerm: 'bites media', results: 1 },
  { searchTerm: 'jobs', results: 7 }
]

const filterResults = [
  {
    filterIndex: 0,
    filterId: 'topic',
    optionId: 'Addressing',
    results: 3
  },
  {
    filterIndex: 0,
    filterId: 'topic',
    optionId: 'Employment',
    results: 9
  },
  { 
    filterIndex: 1,
    filterId: 'year',
    optionId: '2021',
    results: 12
  },
  { 
    filterIndex: 1,
    filterId: 'year',
    optionId: '2018',
    results: 16
  },
  {
    filterIndex: 2,
    filterId: 'partner-agency',
    optionId: 'Department of Agriculture',
    acronym: 'USDA',
    results: 4
  },
  {
    filterIndex: 2,
    filterId: 'partner-agency',
    optionId: 'Census Bureau',
    acronym: 'USCB',
    results: 12
  },
  {
    filterIndex: 2,
    filterId: 'topic',
    optionId: 'Economic Development',
    results: 9
  },
  {
    filterIndex: 2,
    filterId: 'partner-agency',
    optionId: 'Department of Housing and Urban Development',
    acronym: 'HUD',
    results: 14
  },
]

describe('Products Test', () => {


  const search = string => {
    cy.get(searchField).type(string)
    cy.get(searchForm).submit()
  }

  it('shows the right number of results after search', () => {
    cy.visit(base)
    for (const pair of expectedSearchResults) {
      cy.get(searchField).clear().type(pair.searchTerm)
      cy.get(searchForm).submit()
      cy.get(activeQuery).should('have.length', pair.results)
    }
  })

  it('returns all agency results when searching by typing in agency name', () => {
    cy.visit(base)
    for (const pair of filterResults) {
      if (pair.filterId === 'partner-agency') {
        cy.get(searchField).clear().type(pair.optionId)
        cy.get(searchForm).submit()
        cy.get(activeQuery).should('have.length.gte', pair.results)
      }
    }
  })

  it.only('returns all agency results when searching by typing acronym', () => {
    cy.visit(base)
    for (const pair of filterResults) {
      if (pair.filterId === 'partner-agency') {
        cy.get(searchField).clear().type(pair.acronym)
        cy.get(searchForm).submit()
        cy.get(activeQuery).should('have.length.gte', pair.results)
      }
    }
  })

  it('returns same search irrespective of capitalization', () => {
    cy.visit(base)
    for (const pair of expectedSearchResults) {
      cy.get('#search-field').clear().type(pair.searchTerm.toUpperCase())
      cy.get("#product-search-form").submit()
      cy.get(activeQuery).should('have.length', pair.results)
    }
  })

  it('labels how many results were returned', () => {
    cy.visit(base)
    cy.get(resultsField).should("include.text", 'of 101 products.')

    cy.get(searchField).type(expectedSearchResults[0].searchTerm)
    cy.get(searchForm).submit()
    cy.get(resultsField).should("include.text", `of ${expectedSearchResults[0].results} products.`)

    cy.get(searchField).clear()
    cy.get(searchForm).submit()
    cy.get(resultsField).should("include.text", 'of 101 products.')

    cy.get(searchField).clear()
    cy.get(searchField).type('fjkdl;sjafiodusfdajsfkldsa')
    cy.get(searchForm).submit()
    cy.get(resultsField).should('have.text', 'No products found.')
  })

  it('searches products based on existing search in urlParams', () => {
    cy.visit(`${base}?search=${expectedSearchResults[0].searchTerm}`)
    
    cy.get(searchField).should('have.value', expectedSearchResults[0].searchTerm)
    cy.get(resultsField).should('include.text', `of ${expectedSearchResults[0].results} products.`)
    cy.get(activeQuery).should('have.length', expectedSearchResults[0].results)
  })

  it('adds search query to urlParams', () => {
    cy.visit(base)
    search('bananas')
    cy.url().should('contain', 'search=bananas')
  })

  it('removes search from url after clearing search', () => {
    cy.visit(base)
    search('bananas')
    cy.get(resetButton).click()
    cy.url().should('equal', base)
  })

  it('clears search with reset button', () => {
    cy.visit(base)
    search('fooey')
    cy.get(resetButton).click()
    cy.get(searchField).should('have.value', '')
  })

  it('starts with hidden dropdown filter menus', () => {
    cy.visit(base)
    for(let i = 1; i <= 3; i++) {
      cy.get(`.product-filter__container:nth-child(${i}) .dropdown-menu`)
        .should('not.be.visible')
    }
  })

  it('changes display of num products found when filter is clicked', () => {
    const expected = filterResults[0]
    cy.visit(base)
    cy.get(`.product-filter__container:nth-child(${expected.filterIndex + 1})`)
      .within(() => {
        cy.get('button').click()
        cy.get('.dropdown-menu').should('be.visible')
        cy.get(`#${expected.optionId}`)
          .click({force: true})
      })
    cy.get(resultsField)
      .should("include.text", `of ${expected.results} products.`)
  })

  const clickOneOfEachFilter = () => {
    const toTest = [filterResults[0], filterResults[2], filterResults[4]]
    cy.visit(base)
    for (let testing of toTest) {
      cy.get(`.product-filter__container:nth-child(${testing.filterIndex + 1})`)
        .within(() => {
          cy.get('button').click()
          cy.get('.dropdown-menu').should('be.visible')
          cy.get(`.usa-checkbox__label[for='${testing.optionId.replaceAll(' ', '-')}']`)
            .click({force: true})
        })
    }
  }

  it('adds filter to urlSearchParams for each filter type', () => {
    // click one filter of each type (topics, year, partner agency)
    const toTest = [filterResults[0], filterResults[2], filterResults[4]]
    cy.visit(base)
    for (let testing of toTest) {
      cy.get(`.product-filter__container:nth-child(${testing.filterIndex + 1})`)
        .within(() => {
          cy.get('button').click()
          cy.get('.dropdown-menu').should('be.visible')
          cy.get(`.usa-checkbox__label[for='${testing.optionId.replaceAll(' ', '-')}']`)
            .click({force: true})
        })
      cy.url().should('contain', `${testing.filterId}=${testing.optionId.replaceAll(' ', '+')}`)
    }
  })

  it('removes filter from urlParams on clicking again', () => {
    const expected = filterResults[0]
    cy.visit(base)
    cy.get(`.product-filter__container:nth-child(${expected.filterIndex + 1})`)
      .within(() => {
        cy.get('button').click()
        cy.get('.dropdown-menu').should('be.visible')
        cy.get(`#${expected.optionId}`)
          .click({force: true}) 
        cy.url().should('contain', `${expected.filterId}=${expected.optionId.replaceAll(' ', '+')}`)
        
        cy.get(`#${expected.optionId}`)
          .click({force: true})
        cy.url().should('equal', base)
      })
  })

  it('closes filters with reset button', () => {
    cy.visit(base)
    clickOneOfEachFilter()
    cy.get(resetButton).click()
    cy.get('.dropdown-menu').each($el => {
      cy.wrap($el).should('not.be.visible')
    })
  })

  it('clears filters with reset button', () => {
    cy.visit(base)
    clickOneOfEachFilter()
    cy.get(resetButton).click()
    cy.get('.usa-checkbox__input').each($el => {
      cy.wrap($el).should('not.be.checked')
    })
  })

  it('empties urlSearchParams with reset button', () => {
    cy.visit(base)
    clickOneOfEachFilter()
    search("maps")
    cy.get(resetButton).click()

    cy.url().should('equal', base)
  })

  it('combines filters and search in urlParams', () => {
    cy.visit(base)
    clickOneOfEachFilter()
    search("maps")

    for(let i = 0; i <= 4; i += 2) {
      const testing = filterResults[i]
      cy.url().should('contain', `${testing.filterId}=${testing.optionId.replaceAll(' ', '+')}`)
    }
    cy.url().should('contain', 'search=maps')
  })

  it('shows products based on one existing filter in urlParams', () => {
    const testing = filterResults[0]
    cy.visit(`${base}?${testing.filterId}=${testing.optionId.replaceAll(' ', '+')}`)
    
    cy.get(activeQuery).should('have.length', testing.results)
    cy.get(`#${testing.optionId.replace(' ', '-')}`).should('be.checked')
    cy.get(resultsField).should("include.text", `of ${testing.results} products.`)
  })

  it('shows products based on multiple word filter in urlParams', () => {
    const testing = filterResults[6]
    cy.visit(`${base}?${testing.filterId}=${testing.optionId.replaceAll(' ', '+')}`)
    
    cy.get(activeQuery).should('have.length', testing.results)
    cy.get(`#${testing.optionId.replace(' ', '-')}`).should('be.checked')
    cy.get(resultsField).should("include.text", `of ${testing.results} products.`)
  })

  it('shows products based on multiple existing filters of same type in urlParams', () => {
    const testing = [filterResults[0], filterResults[6]]
    const reducer = (acc, currVal, i) => {
      const addString = `${currVal.filterId}=${currVal.optionId.replaceAll(' ', '+')}`
      return i === 0 ? acc + addString : acc + '&' + addString
    }
    const paramString = testing.reduce(reducer, '?')
    cy.visit(`${base}${paramString}`)

    for (const result of testing) {
      cy.get(`#${result.optionId.replace(' ', '-')}`).should('be.checked')
    }
    cy.get(resultsField).should("not.have.text", `Found 101 products.`)
    cy.get(activeQuery).should('have.length.lessThan', 101)
  })

  it('shows products based on multiple existing filters of different types in urlParams', () => {
    const testing = [filterResults[0], filterResults[3]]
    const reducer = (acc, currVal, i) => {
      const addString = `${currVal.filterId}=${currVal.optionId.replaceAll(' ', '+')}`
      return i === 0 ? acc + addString : acc + '&' + addString
    }
    const paramString = testing.reduce(reducer, '?')
    cy.visit(`${base}${paramString}`)

    for (const result of testing) {
      cy.get(`#${result.optionId.replace(' ', '-')}`).should('be.checked')
    }
    cy.get(resultsField).should("not.have.text", `of 101 products.`)
    cy.get(activeQuery).should('have.length.lessThan', 101)
  })

  it('shows products based on filters and search in urlParams', () => {
    const testing = [filterResults[0], filterResults[6]]
    const reducer = (acc, currVal, i) => {
      const addString = `${currVal.filterId}=${currVal.optionId.replaceAll(' ', '+')}`
      return i === 0 ? acc + addString : acc + '&' + addString
    }
    const paramString = testing.reduce(reducer, '?')
    cy.visit(`${base}${paramString}&search=city`)

    for (const result of testing) {
      cy.get(`#${result.optionId.replace(' ', '-')}`).should('be.checked')
    }
    cy.get(resultsField).should("not.have.text", `of 101 products.`)
    cy.get(activeQuery).should('have.length.lessThan', 101)
  })
})

describe.skip('Pagination Tests', () => {
  const pagination = '#pagination-nav'
  it('shows pagination on load', () => {
    cy.visit(base)
    cy.get(pagination)
  })
})