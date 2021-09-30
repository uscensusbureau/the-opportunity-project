const url = '/home-two'

describe('widget tests', () => {
  
  before(() => {
    cy.visit(url)
  })

  it('shows all three buttons on start', () => {
    cy.get('.site-radio')
      .should('have.length', 3)
  })

  it('starts with first button selected', () => {
    cy.get('.site-radio:first-of-type input')
      .should('be.checked')
  })

  function checkVisibleDetailsSection (nthChild) {
    for (let i = 1; i <= 3; i++) {
      const visExpectation = i === nthChild ? 'be.visible' : 'not.be.visible'
      cy.get(`.challenge-widget__details:nth-child(${i})`)
        .should(visExpectation)
    }
  }

  it('starts with only first details visible', () => {
    cy.get('.challenge-widget__details')
      .should('have.length', 3)

    checkVisibleDetailsSection(1)
  })

  it('shows relevant PS info on clicking buttons', () => {
    cy.get('.site-radio:nth-of-type(2)')
      .click()
    checkVisibleDetailsSection(2)

    cy.get('.site-radio:nth-of-type(3)')
      .click()
    checkVisibleDetailsSection(3)

    cy.get('.site-radio:nth-of-type(1)')
      .click()
    checkVisibleDetailsSection(1)

    cy.get('.site-radio:nth-of-type(1)')
      .click()
    checkVisibleDetailsSection(1)

    cy.get('.site-radio:nth-of-type(3)')
      .click()
    checkVisibleDetailsSection(3)
  })

  it('navigates to sprints page after clicking See All Challenges link', () => {
    cy.contains('See all')
      .click()

    cy.location('pathname')
      .should('contain', '/sprints')
  })
})
