let toTopLink = document.getElementById('return-to-top');
if( toTopLink ){
  toTopLink.addEventListener('click', e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}