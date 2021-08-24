const base = '/data'
const pages = [
  '/natural-environment',
  '/workforce',
  '/built-environment',
  '/covid-19',
  '/climate-smart',
  '/covid-spending'
]

function testPSListShouldContain (filterVal) {
  cy.get('[name=data-set-card]:not(.pc-inactive) .dataset__ps')
    .each($psList => {
      cy.wrap($psList)
        .should('include.text', filterVal)
    })

  cy.get('[name=data-set-card].pc-inactive .dataset__ps')
    .each($psList => {
      cy.wrap($psList)
        .should('not.include.text', filterVal)
    })
}

function testPSFilters (url) {
  cy.visit(base + url)
    
  cy.get('.data-card-group li').each($filter => {
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

describe('Content tests', () => {
  it('shows organization for all cards', () => {
    for (const url of pages) {
      cy.visit(base + url)
      cy.get('.data-set-card').each($card => {
        cy.wrap($card)
          .within($card => {
            cy.get('.dataset__org').invoke('text').then( text => {
              // each is 3 because of the text 'by '
              expect(text.length).to.be.gt(3)
            })
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
  it('filters by tag on COVID spending', () => {
    testPSFilters(pages[5])
  })

  
  // it('filters by PS on covid page', () => {
  //   testPSFilters(pages[3])
  // })
})

describe.only('Advanced filtering tests', () => {
  
  it.only('shows relevant datasets on checking one box', () => {
    cy.visit(base + pages[5])
    cy.get('.dch-checkbox:first input')
      .each($filter => {
        cy.wrap($filter)
          .invoke('attr', 'value')
          .then($filterVal => {
            $filter.click()
            testPSListShouldContain($filterVal)
          })
      })
      
  })
})