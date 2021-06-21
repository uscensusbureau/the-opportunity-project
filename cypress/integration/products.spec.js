describe('Products Test', () => {
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
    }
  ]

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
    cy.get(resultsField).should("have.text", 'Found 101 products.')

    cy.get(searchField).type(expectedSearchResults[0].searchTerm)
    cy.get(searchForm).submit()
    cy.get(resultsField).should("have.text", `Found ${expectedSearchResults[0].results} products.`)

    cy.get(searchField).clear()
    cy.get(searchForm).submit()
    cy.get(resultsField).should("have.text", 'Found 101 products.')

    cy.get(searchField).clear()
    cy.get(searchField).type('fjkdl;sjafiodusfdajsfkldsa')
    cy.get(searchForm).submit()
    cy.get(resultsField).should('have.text', 'No products found.')
  })

  it('searches products based on existing search in urlParams', () => {
    cy.visit(`${base}?search=${expectedSearchResults[0].searchTerm}`)
    
    cy.get(searchField).should('have.value', expectedSearchResults[0].searchTerm)
    cy.get(resultsField).should('have.text', `Found ${expectedSearchResults[0].results} products.`)
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

  it.only('changes display of num products found when filter is clicked', () => {
    const expected = filterResults[0]
    cy.visit(base)
    cy.get(`.product-filter__container:nth-child(${expected.filterIndex + 1})`)
      .within(() => {
        cy.get('button').click()
        cy.get('.dropdown-menu').should('be.visible')
        cy.get(`#${expected.optionId}`)
          .click({force: true})
      })
      cy.get(resultsField).should("have.text", `Found ${expected.results} products.`)
      cy.url().should('contain', `${expected.filterId}=${expected.optionId}`)
    
  })

  it('clears filters with reset button', () => {

  })

  it('closes filters with reset button', () => {

  })

  it('empties urlSearchParams with reset button', () => {

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