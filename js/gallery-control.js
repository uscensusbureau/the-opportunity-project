const playPauseButton = document.getElementById('galleryPlayPause')

if (playPauseButton) {
  const btnDisplay = playPauseButton.children[0]

  playPauseButton.addEventListener('click', e => {
    const tiles = document.getElementsByClassName('scrolling-gallery-tile')
    for (const tile of tiles) {
      const running = tile.style.animationPlayState || 'running'
      tile.style.animationPlayState = running === 'running'
        ? 'paused'
        : 'running'
    }

    const isRunningNow = tiles[0].style.animationPlayState === 'running'

    // playPauseButton.innerText = isRunningNow ? "PAUSE" : "PLAY"
    if (isRunningNow) {
      btnDisplay.classList.remove('play')
      btnDisplay.classList.add('pause')
      playPauseButton.setAttribute('aria-label', 'PAUSE')
    } else {
      btnDisplay.classList.remove('pause')
      btnDisplay.classList.add('play')
      playPauseButton.setAttribute('aria-label', 'PLAY')
    }
  })
}
