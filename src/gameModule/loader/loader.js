class Loader {
  constructor() {
    this._html = document.createElement('div')
    let animation = document.createElement('div')
    let spinner = document.createElement('div')
    let text = document.createElement('div')

    this._html.classList.add('loader-wrapper')
    animation.classList.add('loader-animation')
    spinner.classList.add('loader-animation-spinner')
    text.classList.add('loader-text')

    this._html.appendChild(animation)
    this._html.appendChild(text)
    animation.appendChild(spinner)

    text.textContent = polyglot.t('Loading ...')
  }

  get html() {
    return this._html.outerHTML
  }
}

export default new Loader()
