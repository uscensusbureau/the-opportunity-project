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
          cy.get('[name=data-set-card]:not(.pc-inactive)').each($card => {
            cy.wrap($card)
              .within($card => {
                cy.get('h3').should('include.text', $filterId)
              })
          })
          cy.get('[name=data-set-card].pc-inactive').each($card => {
            cy.wrap($card)
              .within($card => {
                cy.get('h3').should('not.include.text', $filterId)
              })
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

describe.only('Filtering tests', () => {

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
})