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

  it('shows relevant PS info on clicking buttons', () => {
    cy.expect(true).to.be.false
  })

  it('navigates to sprints page after clicking See All Challenges link', () => {
    cy.contains('See all')
      .click()

    cy.location('pathname')
      .should('contain', '/sprints')
  })
})
