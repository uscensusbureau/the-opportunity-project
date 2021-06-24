class PaginationUIControl {
  constructor (elementId, numPerPage, onShowPage) {
    console.log('constructing pagination control')
    this.navEl = document.getElementById(elementId)
    this.numPerPage = numPerPage
    this.currPage = 0
    this.onShowPage = onShowPage

    // add event listeners
    this.numberButtons = this.navEl.getElementsByClassName('usa-pagination__page-no')
    for (let i = 0; i < this.numberButtons.length; i++) {
      const button = this.numberButtons[i]
      button.addEventListener('click', () => { this.onPageClicked(i) })
    }

    [this.prevButton, this.nextButton] = this.navEl.getElementsByClassName('usa-pagination__arrow')
    this.prevButton.addEventListener('click', () => this.onPreviousClicked())
    this.nextButton.addEventListener('click', () => this.onNextClicked())
  }

  setTotalItems (numItems) {
    this.numItems = numItems
    this.numPages = Math.ceil(numItems / this.numPerPage)
    // set button visibility
    for (let i = 0; i < this.numberButtons.length; i++) {
      const visible = i < this.numPages
      this.numberButtons[i].style.display = visible ? 'inline-flex' : 'none'
    }
    this._update()
  }

  onPageClicked (pageIndex) {
    console.log('clicked page ' + pageIndex)
    this.currPage = pageIndex
    this._update()
  }

  onNextClicked () {
    console.log('next clicked', this.currPage)
    this.currPage = Math.min(this.numPages - 1, this.currPage + 1)
    console.log('next clicked ', this.currPage)
    this._update()
  }

  onPreviousClicked () {
    console.log('prev clicked', this.currPage)
    this.currPage = Math.max(0, this.currPage - 1)
    console.log('prev clicked', this.currPage)

    this._update()
  }

  _update () {
    this._showButtons()
    this.onShowPage(this.currPage)
  }

  _showButtons () {
    for (const button of this.numberButtons) {
      button.classList.remove('usa-current')
    }
    this.numberButtons[this.currPage].classList.add('usa-current')

    this._setArrowVisibility(this.prevButton, this.currPage > 0)
    this._setArrowVisibility(this.nextButton, this.currPage < this.numPages - 1)

    console.log(`Pagination on page ${this.currPage}`)
  }

  _setArrowVisibility (arrow, visibile) {
    arrow.getElementsByTagName('a')[0].style.visibility = visibile
      ? ''
      : 'hidden'
    // TODO: disable clicks
  }

  _setButtonVisibility (buttonIndex, visible) {
    this.numberButtons[buttonIndex].style.display = visible
      ? 'inline-flex'
      : 'none'
  }
}

module.exports = PaginationUIControl
