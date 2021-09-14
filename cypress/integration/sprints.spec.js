const base = '/sprints/'
const sprints = [
  { url: '', numPS: 7, isCurrent: true, showTranslate: true },
  { url: 'post-covid', numPS: 7, isCurrent: true, showTranslate: true },
  { url: 'pos-covid-esp', numPS: 7, isCurrent: true, showTranslate: true },
  { url: '2020-census-data', numPS: 3, isCurrent: true },
  { url: 'natural-environment', numPS: 4 },
  { url: 'built-environment', numPS: 4 },
  { url: 'geo-cohort', numPS: 4 },
  { url: '2020-census', numPS: 4 },
  { url: 'workforce', numPS: 4 },
  { url: 'past-sprints' },
]

describe('Sprints test', () => {
  it('has the right number of subnav elements', () => {
    for(let i = 0; i < sprints.length; i++) {
      const url = sprints[i].url
      cy.visit(base + url)
      cy.get('#sprint-nav ul').children()
        .should('have.length', sprints.length - 2) // don't show pos-covid-esp
    }
  })

  it('highlights the subnav', () => {
    for(let i = 0; i < sprints.length; i++) {
      const url = sprints[i].url
      cy.visit(base + url)      
      
      const index = i > 0 ? i - 1 : i
      cy.get('#sprint-nav ul>li>a')
        .eq(index).should('have.class', 'highlight')
    }
  })

  it('contains agency text', () => {
    for(let i = 0; i < sprints.length; i++) {
      const url = sprints[i].url
      cy.visit(base + url)      
      
      cy.get('.ps-agency p').each($el => {
        cy.wrap($el).invoke('text').then( text => {
          expect(text.length).to.be.gt(0)
        })
      })
    }
  })

  it('recent sprints have correct number of problem statements', () => {
    for(let i = 0; i < sprints.length - 1; i++) {
      const url = sprints[i].url
      cy.visit(base + url)
      cy.get('.problem-statement').should('have.length', sprints[i].numPS)
    }
  })

  it('links to related products return 200s', () => {
    for(let i = 0; i < sprints.length - 1; i++) {
      if (!sprints[i].isCurrent) {
        const url = sprints[i].url
        cy.visit(base + url)
        cy.get('.explore-products')
          .should('have.length.at.least', 2)
        cy.get('.explore-products').each(link => {
          cy.request(link.prop('href'))
            .its('status')
            .should('eq', 200)
        })
      }
    }
  })

  it('shows >0 related products after clicking Explore All Products', () => {
    for(let i = 1; i < sprints.length - 1; i++) {
      if (!sprints[i].isCurrent) {
        const url = sprints[i].url
        cy.visit(base + url)
        cy.document().then(doc => {
          const links = doc.querySelectorAll('.explore-products')
          for(let i = 0; i < links.length; i++){
            cy.get('.explore-products').eq(i).click({force: true})
            cy.location('pathname').should('eq', '/showcase/')
            const searchString = links[i].href.split("/").pop()
            const term = searchString.split('=').pop()
            cy.location('search').should('eq', searchString)
            cy.get('#search-field').should('have.value', term)
            cy.get('.product-card:not(.pc-inactive)')
              .should('have.length.at.least', 1)

            cy.go('back')
            cy.location('pathname').should('eq', `${base}${url}/`)
          }
        })
      }
    }
  })

  it('shows pdf button for all current problem statements', () => {
    cy.visit(base)
    cy.get('.ps-pdf').should('have.length', sprints[0].numPS)
  })

  it('starts current sprints with all PS segments collapsed', () => {
    for (const sprint of sprints) {
      if (sprint.isCurrent) {
        cy.visit(base + sprint.url)
        cy.get('.ps-left-col').each($el => {
          cy.wrap($el).should('have.class', 'ps-collapsed')
        })
      }
    }
  })

  it('has Post-COVID pdf at proper link', () => {
    cy.request('/assets/files/Post-COVID-Problem-Statements.pdf')
  })
})

describe.only('Translation tests', () => {
  const translateButton = '#translate-button'
  it.skip('shows translate button only on Post-COVID pages', () => {
    for (const sprint of sprints) {
      cy.visit(base + sprint.url)
      const expecting = sprint.showTranslate ? 'exist' : 'not.exist'
      cy.get(translateButton)
        .should(expecting)
    }
  })

  it.skip('navigates to Spanish translation from English version', () => {
    cy.visit('/sprints/post-covid')
    cy.get(translateButton)
      .click()
    cy.location('pathname').should('contain', '/pos-covid-esp/')
    
  })

  it.skip('navigates to English from Spanish', () => {
    cy.visit('/sprints/pos-covid-esp')
    cy.get(translateButton)
      .click()
    cy.location('pathname').should('contain', '/post-covid/')
  })

  it('shows Spanish translation of Sprint-specific content on Spanish page', () => {
    cy.visit('/sprints/pos-covid-esp')
    cy.get('.sprint-hero-header').contains('El Mundo')
  })

  it('shows Spanish translation of Sprint-specific content on Spanish page', () => {
    cy.visit('/sprints/pos-covid-esp')
    
    cy.get('.interior-hero p').contains('Obtenga información')
    cy.get('.sprint-hero__callout').contains('Actualmente estamos')
    cy.get('.sprint-hero__callout .btn-link').contains('PARTICIPE EN EL SPRINT', { matchCase: false})
    cy.get('h2:last-of-type').contains('¿Desea participar en este sprint')
    cy.get('h2:last-of-type+.btn-link').contains('HAGA CLIC AQUÍ PARA COMENZAR EL PROCESO', { matchCase: false })

    cy.get('.problem-statement').each($ps => {
      cy.wrap($ps)
        .contains('Planteamiento del Problema')
      cy.wrap($ps)
        .contains('Agencia')
      cy.wrap($ps)
        .contains('El Desafío')
      cy.wrap($ps)
        .contains('El Problema')
      cy.wrap($ps)
        .contains('Descargar El Texto Completo (PDF)')
      cy.wrap($ps)
        .contains('Usuarios Finales Como Objetivo')
    })
  })
  
  it.only('shows English content of general Sprint info on all English pages', () => {
    for (const sprint of sprints) {
      cy.visit(base + sprint.url)
      if (sprint.url !== 'pos-covid-esp') {
        cy.get('.interior-hero p').contains('Learn about sprints')

        if (sprint.isCurrent) {
          cy.get('.sprint-hero__callout').contains('We are currently')
          cy.get('.sprint-hero__callout .btn-link').contains('JOIN A SPRINT', { matchCase: false })
          cy.get('h2:last-of-type').contains('Want to join a sprint?')
          cy.get('h2:last-of-type+.btn-link').contains('Click here', { matchCase: false })
        }

        if (sprint.numPS) {
          cy.get('.problem-statement').contains('Problem Statement')
          cy.get('.problem-statement')
            .contains('Planteamiento del Problema')
            .should('not.exist')
          cy.get('.problem-statement').contains('Agency')
          cy.get('.problem-statement').contains('Challenge')
          cy.get('.problem-statement').contains('Why This Problem is Important')
          cy.get('.problem-statement').contains('Target Audience')

          cy.get('.problem-statement')
            .contains('El Desafío')
            .should('not.exist')
          cy.get('.problem-statement')
            .contains('El Problema')
            .should('not.exist')
          cy.get('.problem-statement')
            .contains('Descargar El Texto Completo (PDF)')
            .should('not.exist')
          cy.get('.problem-statement')
            .contains('Usuarios Finales Como Objetivo')
            .should('not.exist')
        }
      }
    }
  })

  it('shows Spanish translation for each Problem Statement', () => {

  })

  it('offers Spanish translation PDF for each PS download', () => {

  })
})

describe('past sprints test', () => {
  const categories = [
    { name: "Workforce", amt: 5 },
    { name: "Education", amt:  7 },
    { name: "Equity", amt: 3 },
    { name: "Housing", amt: 3}
  ]
  const numPs = categories.reduce(
    ((accumulator, currVal) => accumulator + currVal.amt), 0)

  beforeEach(() => {
    cy.visit('/sprints/past-sprints/')
  })

  it('displays right amt of sprints', () => {
    cy.get('.problem-statement').should('have.length', numPs)
  })

  it('displays right amt of sprints per category', () => {
    // open the page with workforce selected
    cy.get('.problem-statement.ps-active')
      .should('have.length', categories[0].amt)
    
    for(const cat of categories) {
      cy.get(`#${cat.name}`).click()
      cy.get('.problem-statement.ps-active')
        .should('have.length', cat.amt)
    }

    // click first button again
    cy.get(`#${categories[0].name}`).click()
    cy.get('.problem-statement.ps-active')
      .should('have.length', categories[0].amt)
  })
})