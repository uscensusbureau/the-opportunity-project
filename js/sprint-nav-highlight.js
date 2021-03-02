const nav = document.getElementsByClassName('sprint-nav')[0];
if( nav ){
  const items = nav.getElementsByClassName('sprint-nav-item')

  const highlightNav = pageName => {
    const toHighlight = document.getElementById( pageName ).getElementsByTagName('a')[ 0 ];
    nav.scrollTo( toHighlight.offsetLeft, toHighlight.offsetTop );
    toHighlight.classList.add('highlight')
  }

  const loc = window.location.pathname.replace(/\/$/, '').replace('.html', '') // get rid of trailing '/'
  const sprint = loc.substring( loc.lastIndexOf('/') + 1 )

  highlightNav( sprint );
} 
  