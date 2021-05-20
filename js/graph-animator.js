const toObserve = document.querySelector('#judging-graphs')

if (toObserve) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  const fills = document.getElementsByClassName('graph-fill')

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const intersect = entry.intersectionRatio
      if (intersect > 0.8) {
        for (const fill of fills) {
          fill.classList.remove('empty')
        }
      } else if (intersect <= 0.1) {
        for (const fill of fills) {
          fill.classList.add('empty')
        }
      }
    })
  }

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(callback, options)
  observer.observe(toObserve)
}
