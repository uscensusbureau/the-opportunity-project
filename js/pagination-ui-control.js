class PaginationUIControl {
  constructor (paginationId, numPerPage, onShowPage) {
    console.log('constructing pagination control')
    this.navEl = document.getElementById(paginationId)
    this.numPerPage = numPerPage
    this.currPage = 0
    this.onShowPage = onShowPage

    // add event listeners
    this.numberButtons = this.navEl.getElementsByClassName('usa-pagination__page-no')
    for (let i = 0; i < this.numberButtons.length; i++) {
      const button = this.numberButtons[i]
      button.addEventListener('click', e => {
        e.preventDefault()
        this.onPageClicked(i)
      })
    }

    [this.prevButton, this.nextButton] = this.navEl.getElementsByClassName('usa-pagination__arrow')
    this.prevButton.addEventListener('click', e => {
      e.preventDefault()
      this.onPreviousClicked()
    })
    this.nextButton.addEventListener('click', e => {
      e.preventDefault()
      this.onNextClicked()
    })
  }

  setTotalItems (numItems) {
    this.numItems = numItems
    this.numPages = Math.ceil(numItems / this.numPerPage)
    this.currPage = 0
    // set button visibility
    for (let i = 0; i < this.numberButtons.length; i++) {
      const visible = i < this.numPages
      this.numberButtons[i].style.display = visible ? 'inline-flex' : 'none'
    }
    this._showButtons() // don't call continuation here
  }

  onPageClicked (pageIndex) {
    console.log('clicked page ' + pageIndex)
    this.currPage = pageIndex
    this._update()
  }

  onNextClicked () {
    console.log('clicked next')
    this.currPage = Math.min(this.numPages - 1, this.currPage + 1)
    this._update()
  }

  onPreviousClicked () {
    console.log('clicked prev')
    this.currPage = Math.max(0, this.currPage - 1)
    this._update()
  }

  _showButtons () {
    for (const button of this.numberButtons) {
      button.getElementsByTagName('a')[0].classList.remove('usa-current')
    }
    this.numberButtons[this.currPage].getElementsByTagName('a')[0].classList.add('usa-current')

    this._setArrowVisibility(this.prevButton, this.currPage > 0)
    this._setArrowVisibility(this.nextButton, this.currPage < this.numPages - 1)
  }

  _setArrowVisibility (arrow, visibile) {
    if (visibile) {
      arrow.classList.remove('hidden')
    } else {
      arrow.classList.add('hidden')
    }
  }

  _setButtonVisibility (buttonIndex, visible) {
    this.numberButtons[buttonIndex].style.display = visible
      ? 'inline-flex'
      : 'none'
  }

  _update () {
    console.log('updating')
    this._showButtons()
    this.onShowPage(this.currPage, true)
  }
}

module.exports = PaginationUIControl
