console.log('return to top loaded')
document.getElementById('return-to-top').onclick = e => {
  console.log('click!');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};