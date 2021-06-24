class PaginationUIControl {
  constructor (elementId, numPerPage, onShowPage) {
    console.log('constructing pagination control')
    this.navEl = document.getElementById(elementId)
    this.numPerPage = numPerPage
    this.currPage = 0
    this.onShowPage = onShowPage

    // add event listeners
    const numberButtons = this.navEl.getElementsByClassName('usa-pagination__page-no')
    for (let i = 0; i < numberButtons.length; i++) {
      console.log('adding event listener')
      const button = numberButtons[i]
      console.log(button)
      button.addEventListener('click', () => { this.onPageClicked(i) })
    }
  }

  setTotalItems (numItems) {
    this.numItems = numItems
    this.numPages = Math.ceil(numItems / this.numPerPage)
    this._update()
  }

  onPageClicked (pageIndex) {
    console.log('clicked page ' + pageIndex)
    this.currPage = pageIndex
    this._update()
  }

  onNextClicked () {
    this.currPage = Math.min(this.numPages, this.currPage + 1)
    this._update()
  }

  onPreviousClicked () {
    this.currPage = Math.max(0, this.currPage - 1)
    this._update()
  }

  _update () {
    this._showButtons()
    this.onShowPage(this.currPage)
  }

  _showButtons () {
    console.log(`Pagination on page ${this.currPage}`)
  }
}

module.exports = PaginationUIControl
