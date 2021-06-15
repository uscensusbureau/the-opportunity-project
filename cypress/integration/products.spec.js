describe('Products Test', () => {
  const base = 'http://localhost:4000/showcase/'
  const searchField = '#search-field'
  const searchForm = '#product-search-form'
  const activeQuery = '.product-card:not(.pc-inactive)'
  const resultsField = '#results-count'
  const resetButton = '#reset-filter'

  const expectedResults = [
    { searchTerm: 'naip', results: 4},
    { searchTerm: 'bananarama', results: 0 },
    { searchTerm: 'maps', results: 2 },
    { searchTerm: 'covid', results: 13 },
    { searchTerm: 'bites media', results: 1 },
    { searchTerm: 'jobs', results: 7 }
  ]

  const search = string => {
    cy.get(searchField).type(string)
    cy.get(searchForm).submit()
  }

  it('shows the right number of results after search', () => {
    cy.visit(base)
    for (const pair of expectedResults) {
      cy.get(searchField).clear().type(pair.searchTerm)
      cy.get(searchForm).submit()
      cy.get(activeQuery).should('have.length', pair.results)
    }
  })

  it('returns same search irrespective of capitalization', () => {
    cy.visit(base)
    for (const pair of expectedResults) {
      cy.get('#search-field').clear().type(pair.searchTerm.toUpperCase())
      cy.get("#product-search-form").submit()
      cy.get(activeQuery).should('have.length', pair.results)
    }
  })

  it('labels how many results were returned', () => {
    cy.visit(base)
    cy.get(resultsField).should("have.text", 'Found 101 products.')

    cy.get(searchField).type(expectedResults[0].searchTerm)
    cy.get(searchForm).submit()
    cy.get(resultsField).should("have.text", `Found ${expectedResults[0].results} products.`)

    cy.get(searchField).clear()
    cy.get(searchForm).submit()
    cy.get(resultsField).should("have.text", 'Found 101 products.')

    cy.get(searchField).clear()
    cy.get(searchField).type('fjkdl;sjafiodusfdajsfkldsa')
    cy.get(searchForm).submit()
    cy.get(resultsField).should('have.text', 'No products found.')
  })

  it('searches products based on existing search in urlParams', () => {
    cy.visit(`${base}?search=${expectedResults[0].searchTerm}`)
    
    cy.get(searchField).should('have.value', expectedResults[0].searchTerm)
    cy.get(resultsField).should('have.text', `Found ${expectedResults[0].results} products.`)
    cy.get(activeQuery).should('have.length', expectedResults[0].results)
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

  it('clears filters with reset button', () => {

  })

  it('closes filters with reset button', () => {

  })

  it('empties urlSearchParams with reset button', () => {

  })

  it('changes display of num products found when filter is clicked', () => {
    
  })

  it('filters products based on existing filters in urlParams', () => {
    expect(true).to.equal(false)
  })

  it('adds filter queries to urlParams', () => {
    expect(true).to.equal(false)
  })

  it('combines filters and search in urlParams', () => {
    expect(true).to.equal(false)
  })
})