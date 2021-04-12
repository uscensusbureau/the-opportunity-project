const playPauseButton = document.getElementById('galleryPlayPause');

if( playPauseButton ){
  playPauseButton.addEventListener( 'click', e => {
    const tiles = document.getElementsByClassName('scrolling-gallery-tile');
    for( tile of tiles ){
      const running = tile.style.animationPlayState || 'running';
      tile.style.animationPlayState = running === 'running' ? 'paused' 
      : 'running';
    }

    const isRunningNow = tiles[0].style.animationPlayState === 'running'
    playPauseButton.innerText = isRunningNow ? "PAUSE" : "PLAY"
  })
}