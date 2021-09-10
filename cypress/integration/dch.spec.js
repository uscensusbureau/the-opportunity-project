const base = '/data'
const pages = [
  '/natural-environment',
  '/workforce',
  '/built-environment',
  '/covid-19',
  '/climate-smart',
  '/covid-spending'
]
const resultsField = '#results-count'
const searchField = '#search-field'
const searchForm = '#data-search-form'

function testPSListShouldContain (filterVal) {
  cy.get('[name=data-set-card][dch-passes-filter=true] .dataset__ps')
    .each($psList => {
      cy.wrap($psList)
        .should('include.text', filterVal)
    })

  cy.get('[name=data-set-card][dch-passes-filter=false] .dataset__ps')
    .each($psList => {
      cy.wrap($psList)
        .should('not.include.text', filterVal)
    })

  
}

function testPSFilters (url) {
  cy.visit(base + url)
    
  cy.get('.dch__data-topic').each($filter => {
    cy.wrap($filter).invoke('attr', 'id')
      .then($filterId => {
        if ($filterId !== 'all') {
          $filter.click()
          testPSListShouldContain($filterId)
        }
      })
  })

  cy.get('[name=data-set-card]:not(.pc-inactive)')
    .its('length')
    .then($numFound => {
      cy.get(resultsField).should("include.text", `${$numFound}`)
    })
}

describe('Content tests', () => {
  it('shows organization for all cards', () => {
    for (const url of pages) {
      cy.visit(base + url)
      cy.get('.data-set-card .dataset__org').each($orgText => {
        cy.wrap($orgText).invoke('text').then( text => {
          // each is 3 because of the text 'by '
          expect(text.length).to.be.gt(3)
        })
      })
    }
  })

  it('shows datasets belonging to multiple sprints in both kits', () => {
    cy.visit(base + '/workforce')
    cy.get('#data-set-card-location-of-energy-infrastructure')
    cy.visit(base + '/built-environment')
    cy.get('#data-set-card-location-of-energy-infrastructure')
  })
})

describe.skip('Filtering tests', () => {

  it('filters by PS on natural env page', () => {
    testPSFilters(pages[0])
  })
  it('filters by PS on workforce page', () => {
    testPSFilters(pages[1])
  })
  it('filters by PS on built env page', () => {
    testPSFilters(pages[2])
  })
  it('filters by tag on climate-smart page', () => {
    testPSFilters(pages[4])
  })
  it('filters by tag on COVID spending', () => {
    testPSFilters(pages[5])
  })

  function clearSearch () {
    cy.get('#search-field').clear()
    cy.get('#data-search-form').submit()
  }

  it('searches for datasets by text on natural env page', () => {
    cy.visit(base + '/natural-environment')
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 62)

    cy.get('#search-field').type('trash')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 1)

    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 16)

    cy.get('#search-field').clear()
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 62)

      // search on NOAA page
    cy.visit(base + '/climate-smart')
    cy.get('#search-field').clear().type('map')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 11)

    cy.get('#search-field').clear().type('climate')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 14)

    cy.get('#search-field').clear().type('tree')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 1)
  })

  it('limits text search to current category', () => {
    cy.visit(base + '/natural-environment')
    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 16)

    cy.get('#ocean-plastics')
      .click()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 14)
    
    cy.get('#recycled-materials')
      .click()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 2)

    clearSearch()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 17)
    cy.get('#all')
      .click()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 62)

    cy.get('#recycled-materials')
      .click()
    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 2)

    clearSearch()
    cy.get('.data-set-card[dch-passes-filter=true]')
      .should('have.length', 17)
  })
})

describe.only('Advanced filtering tests', () => {
  const advancedUrl = base + pages[5]
  const resetButton = '#dch-reset--geo'
  const allButton = '#all'

  function testPSListWithRegex (regex) {
    cy.get('[name=data-set-card][dch-passes-filter=true] .dataset__ps')
      .each($psList => {
        cy.wrap($psList)
          .invoke('html')
          .then( $text => {
            expect(regex.test($text)).to.be.true
          })
      })

    cy.get('[name=data-set-card][dch-passes-filter=false] .dataset__ps')
      .each($psList => {
        cy.wrap($psList)
          .invoke('html')
          .then( $text => {
            expect(regex.test($text)).to.be.false
          })
      })
  }
  function expectAllCards (numToExpect = 47) {
    cy.get('.data-set-card[dch-passes-filter=true]').should('have.length', numToExpect)
  }

  before(() => {
    cy.visit(advancedUrl)
  })

  it('shows relevant datasets on checking one box', () => {
    cy.get('.dch-checkbox input')
      .each($filter => {
        cy.wrap($filter)
          .invoke('attr', 'value')
          .then($filterVal => {
            $filter.click()
            testPSListShouldContain($filterVal)
          })
        cy.wrap($filter).click({ force: true })
        expectAllCards()
      })
  })

  it('filters by logical OR after checking two+ of same filter', () => {
    cy.get('#city, #state')
      .each($filter => {
        cy.wrap($filter).click({force: true})
      })
    let regex = /city|state/
    testPSListWithRegex(regex)
    cy.get('#city, #state')
      .each($filter => {
        cy.wrap($filter).click({force: true})
      })
    expectAllCards()

    cy.get('#core-based-statistical-area, #county')
      .each($filter => {
        cy.wrap($filter).click({force: true})
      })
    regex = /core-based-statistical-area|county/
    testPSListWithRegex(regex)
    cy.get('#core-based-statistical-area, #county')
      .each($filter => {
        cy.wrap($filter).click({force: true})
      })
    expectAllCards()
  })

  it('only shows reset button on covid-spending page', () => {
    for (const page of pages) {
      const expecting = page === '/covid-spending' ? 'exist' : 'not.exist'
      cy.visit(base + page)
      cy.get(resetButton)
        .should(expecting)
    }
  })

  it('resets all button filters after clicking the RESET FILTER button', () => {
    const clicking = 
      '#government-finance, #census-tract, #census-block, #state'
    cy.get(clicking).each( el => cy.wrap(el).click({force: true}))
    
    cy.get(resetButton).click()

    // test that things are reset
    expectAllCards()
    cy.get(clicking).each( el => {
      cy.wrap(el)
        .should('not.have.checked')
    })
    cy.get(allButton).should('have.checked', true)
  })

  it.only('resets the search field after clicking the reset filter button', () => {
    cy.get(searchField)
      .type('data')
    cy.get(searchForm).submit()

    cy.get(resetButton).click()

    cy.get(searchField)
      .should('have.value', '')
    expectAllCards()
  })

  it.skip('filters by logical AND after checking one each of two different filters', () => {
    cy.get('#census-division, #north-american-industry-classification-system')
      each($filter => {
        cy.wrap($filter).click({force: true})
      })
    let regex = /(?=.*census-division)(?=.*north-american-industry-classification-system)/
    testPSListWithRegex(regex)
    cy.get('#census-division, #north-american-industry-classification-system')
      each($filter => {
        cy.wrap($filter).click({force: true})
      })
    expectAllCards()

    cy.get('#census-region, #city, #north-american-industry-classification-system')
      each($filter => {
        cy.wrap($filter).click({force: true})
      })
    regex = /(?=.*census-region|city)(?=.*north-american-industry-classification-system)/
    testPSListWithRegex(regex)
    cy.get('#census-region, #city, #north-american-industry-classification-system')
      each($filter => {
        cy.wrap($filter).click({force: true})
      })
    expectAllCards()
    
  })
})