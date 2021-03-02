// Update display to reflect the selected year

const tabBar = document.getElementsByClassName( 'problem-statements' )[0];

if( tabBar ){
  const yearButtons = document.getElementsByClassName( 'yr-btn' );

  tabBar.addEventListener( 'click', e => {
    var problemSet = e.target.id

    Array.from( yearButtons ).forEach( button => button.classList.remove( 'yr-btn-active' ))

    Array.from( document.getElementsByClassName('ps-active') )
      .forEach( el => {
        el.classList.add( 'ps-inactive' );
        el.classList.remove('ps-active')})

    document.getElementById(problemSet).classList.add( 'yr-btn-active' )

    Array.from( document.getElementsByClassName(`ps-${problemSet}`) )
      .forEach( el => {
        el.classList.add( 'ps-active' )
        el.classList.remove('ps-inactive')
      })
  });
}
