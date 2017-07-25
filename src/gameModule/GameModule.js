import on from 'on'

export default class GameModule {
  static get CONTAINER() {
    return 'intro'
  }

  constructor(type = 'default') {
    this._type = type

    this.init()
  }

  init() {
    this._container = document.querySelector('.game-wrapper')
    this.onEvent = on(this)
    window.onEvent = on(window)
    window.onEvent(evt => {
      if (evt.event === 'quit') this.onSuddentQuit()
    })
  }

  ready() {
    this.onEvent._fire({ event: 'ready', type: this._type })
  }

  prepareScene() {
    this.cleanScene()
    let div = document.createElement('div')
    this._container.appendChild(div)
    div.innerHTML = this._scene.html

    this._scene.start()

    this._scene.onEvent(evt => {
      if (evt.event != null && evt.event === 'sceneEnd') this.sceneEnd(evt)
    })
  }

  cleanScene() {
    if (this._container.firstChild != null)
      this._container.removeChild(this._container.firstChild)
  }

  destroy() {
    this.cleanScene()
  }

  sceneEnd(evt) {
    /* sould be overridden */
  }

  onSuddentQuit() {
    var souldQuit = confirm('Quit ?')
    if (souldQuit) this.destroy()
  }

  get scene() {
    return this._scene
  }

  set scene(scene) {
    this._scene = scene
    this._step = this._scene.step

    this.prepareScene()

    this.onEvent._fire({ event: this._step, type: this._type })
  }
}
