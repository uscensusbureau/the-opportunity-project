let toObserve = document.querySelector('#judging-graphs')

if( toObserve ){
  
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  let fills = document.getElementsByClassName('graph-fill');

  let callback = (entries, observer) => {
    entries.forEach( entry => {
      let intersect = entry.intersectionRatio;
      if( intersect > 0.8 ){
        for( fill of fills ){
          fill.classList.remove('empty');
        }
      } else if( intersect <= 0.1 ){
        for( fill of fills ){
          fill.classList.add('empty');
        }
      }
    })
  }

  let observer = new IntersectionObserver(callback, options);
  observer.observe( toObserve );
}