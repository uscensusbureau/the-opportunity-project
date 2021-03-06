const EXPANDED_CLASS = 'ps-expanded'
const COLLAPSED_CLASS = 'ps-collapsed'

const buttons = document.getElementsByClassName('callout-button')
const problemStatements = document.getElementsByClassName('problem-statement')

if( buttons ){
  Array.from( buttons ).forEach( button => {
    // find the matching problemStatement
    let parentProblem = problemStatements[ 1 ]
    Array.from( problemStatements ).forEach( ps => {
      if( ps.contains( button )){
        parentProblem = ps;
      }
    })

    button.addEventListener('click', e => {
      let expandedEls = parentProblem.getElementsByClassName( EXPANDED_CLASS );
      let collapsedEls = parentProblem.getElementsByClassName( COLLAPSED_CLASS );
      if( expandedEls.length > 0 ){
        Array.from( expandedEls ).forEach( el => {
          el.classList.remove( EXPANDED_CLASS ); 
          el.classList.add( COLLAPSED_CLASS );
        })
        button.innerHTML = "<span>See More</span>";
      }
      else if( collapsedEls.length > 0 ){
        Array.from( collapsedEls ).forEach( el => {
          el.classList.remove( COLLAPSED_CLASS ); 
          el.classList.add( EXPANDED_CLASS );
        })
        button.innerHTML = "<span>See Less</span>";
      }

      parentProblem.scrollIntoView({
        behavior: "smooth"
      });
    })
  })
}