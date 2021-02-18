const nav = document.getElementById('sprint-nav')
const items = nav.getElementsByClassName('sprint-nav-item')

const highlightNav = pageName => {
  console.log('highlighting ' + pageName)
  const toHighlight = document.getElementById( pageName ).getElementsByTagName('a')[ 0 ];
  nav.scrollTo( toHighlight.offsetLeft, toHighlight.offsetTop );
  toHighlight.classList.add('highlight')
}