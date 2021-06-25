class PaginationUIControl {
  constructor (paginationId, numPerPage, onShowPage) {
    this.navEl = document.getElementById(paginationId)
    this.numPerPage = numPerPage
    this.currPage = 0
    this.onShowPage = onShowPage

    if (this.navEl) {
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

  setCurrPage (pageIndex) {
    this.currPage = pageIndex
    this._showButtons()
  }

  onPageClicked (pageIndex) {
    this.currPage = pageIndex
    this._update()
  }

  onNextClicked () {
    this.currPage = Math.min(this.numPages - 1, this.currPage + 1)
    this._update()
  }

  onPreviousClicked () {
    this.currPage = Math.max(0, this.currPage - 1)
    this._update()
  }

  _showButtons () {
    for (let i = 0; i < this.numberButtons.length; i++) {
      const link = this.numberButtons[i].getElementsByTagName('a')[0]
      if (link) {
        link.classList.remove('usa-current')
        link.removeAttribute('aria-current')
        link.setAttribute('aria-label', `Page ${i + 1}`)
      }
    }
    const currPageLink = this.numberButtons[this.currPage].getElementsByTagName('a')[0]
    currPageLink.classList.add('usa-current')
    currPageLink.setAttribute('aria-current', 'page')

    if (this.numPages > 0) {
      this.numberButtons[this.numPages - 1].getElementsByTagName('a')[0].setAttribute(
        'aria-label', `last page, Page ${this.numPages}`)
    }

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

  _update () {
    this._showButtons()
    this.onShowPage(this.currPage, true)
  }
}

module.exports = PaginationUIControl
