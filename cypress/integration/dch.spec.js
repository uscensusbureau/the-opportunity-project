const base = '/data'
const pages = [
  '/natural-environment',
  '/workforce',
  '/built-environment',
  '/covid-19'
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
        }
      })
  })
}

describe('Filtering tests', () => {

  it('only shows datasets from asscd PS after clicking PS filter', () => {
    testPSFilters(pages[0])
  })
  it.only('filters by PS on workforce page', () => {
    testPSFilters(pages[1])
  })
  it('filters by PS on built env page', () => {
    testPSFilters(pages[2])
  })
  it('filters by PS on covid page', () => {
    testPSFilters(pages[3])
  })
})