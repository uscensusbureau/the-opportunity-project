describe('Products Test', () => {
  const base = 'http://localhost:4000/showcase'
  const searchField = '#search-field'
  const searchForm = '#product-search-form'
  const activeQuery = '.product-card:not(.pc-inactive)'

  const expectedResults = [
    { searchTerm: 'naip', results: 4},
    { searchTerm: 'bananarama', results: 0 },
    { searchTerm: 'maps', results: 2 },
    { searchTerm: 'covid', results: 13 },
    { searchTerm: 'bites media', results: 1 },
    { searchTerm: 'jobs', results: 7 }
  ]

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

  it.only('labels how many results were returned', () => {
    const resultsField = '#results-count'
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
    cy.get(resultsField).should("have.text", 'No products found.')
  })

  it('adds search query to urlParams', () => {
    expect(true).to.equal(false)
  })

  it('adds filter queries to urlParams', () => {
    expect(true).to.equal(false)
  })

  it('combines filters and search in urlParams', () => {
    expect(true).to.equal(false)
  })

  it('filters products based on existing filters in urlParams', () => {
    expect(true).to.equal(false)
  })

  it('searches products based on existing search in urlParams', () => {
    return false;

  })
})