const EXPANDED_CLASS = 'ps-expanded'
const COLLAPSED_CLASS = 'ps-collapsed'

const buttons = document.getElementsByClassName('callout-button')
const problemStatements = document.getElementsByClassName('problem-statement')

if (buttons) {
  Array.from(buttons).forEach(button => {
    // find the matching problemStatement
    let parentProblem = problemStatements[1]
    Array.from(problemStatements).forEach(ps => {
      if (ps.contains(button)) {
        parentProblem = ps
      }
    })

    button.addEventListener('click', e => {
      const expandedEls = parentProblem.getElementsByClassName(EXPANDED_CLASS)
      const collapsedEls = parentProblem.getElementsByClassName(COLLAPSED_CLASS)
      if (expandedEls.length > 0) {
        Array.from(expandedEls).forEach(el => {
          el.classList.remove(EXPANDED_CLASS)
          el.classList.add(COLLAPSED_CLASS)
        })
        setButtonText(button, true)
      } else if (collapsedEls.length > 0) {
        Array.from(collapsedEls).forEach(el => {
          el.classList.remove(COLLAPSED_CLASS)
          el.classList.add(EXPANDED_CLASS)
        })
        setButtonText(button, false)
      }

      parentProblem.scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}

/**
 * Toggles the SHOW MORE / SHOW LESS button to display proper text
 * @param {HTMLElement} container parent container for the button text to toggle
 * @param {boolean} showSeeMore if true, display "SEE MORE". if false, display "SEE LESS"
 */
const setButtonText = (container, showSeeMore) => {
  const seeLess = container.querySelector('.ps-see-more__less')
  const seeMore = container.querySelector('.ps-see-more__more')

  const toShow = showSeeMore ? seeMore : seeLess
  const toHide = showSeeMore ? seeLess : seeMore
  if (toShow) {
    toShow.classList.remove('display-none')
  }
  if (toHide) {
    toHide.classList.add('display-none')
  }
}
