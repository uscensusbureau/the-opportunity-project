const base = '/data'
const pages = [
  '/natural-environment',
  '/workforce',
  '/built-environment',
  '/covid-19',
  '/climate-smart'
]

function testPSFilters (url) {
  cy.visit(base + url)
    
  cy.get('.data-card-group .usa-card').each($filter => {
    cy.wrap($filter).invoke('attr', 'id')
      .then($filterId => {
        if ($filterId !== 'all') {
          $filter.click()
          cy.get('[name=data-set-card]:not(.pc-inactive) .dataset__ps')
            .each($psList => {
              cy.wrap($psList)
                .should('include.text', $filterId)
          })
          cy.get('[name=data-set-card].pc-inactive .dataset__ps')
            .each($psList => {
              cy.wrap($psList)
                .should('not.include.text', $filterId)
          })
        }
      })
  })
}

describe.only('Content tests', () => {
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

describe('Filtering tests', () => {

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

  // it('filters by PS on covid page', () => {
  //   testPSFilters(pages[3])
  // })

  function clearSearch () {
    cy.get('#search-field').clear()
    cy.get('#data-search-form').submit()
  }

  it('searches for datasets by text on natural env page', () => {
    cy.visit(base + '/natural-environment')
    cy.get('.data-set-card')
      .should('have.length', 62)

    cy.get('#search-field').type('trash')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 1)

    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 16)

    cy.get('#search-field').clear()
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 62)

      // search on NOAA page
    cy.visit(base + '/climate-smart')
    cy.get('#search-field').clear().type('map')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 11)

    cy.get('#search-field').clear().type('climate')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 13)

    cy.get('#search-field').clear().type('tree')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 1)
  })

  it.only('limits text search to current category', () => {
    cy.visit(base + '/natural-environment')
    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 16)

    cy.get('#ocean-plastics')
      .click()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 14)
    
    cy.get('#recycled-materials')
      .click()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 2)

    clearSearch()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 17)
    cy.get('#all')
      .click()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 62)

    cy.get('#recycled-materials')
      .click()
    cy.get('#search-field').clear().type('plastic')
    cy.get('#data-search-form').submit()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 2)

    clearSearch()
    cy.get('.data-set-card:not(.pc-inactive)')
      .should('have.length', 17)
  })
})