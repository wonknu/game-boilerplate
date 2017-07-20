import on from 'on'

export default class GameScene {

  constructor (step = 'default') {
  	this.step = step

    this.init()
  }

  init () {
    this.onEvent = on(this)
  }

  start () {
    this.btnNext = document.querySelector('.btn-next')
    this._handleEnd = this.end.bind(this)
    this.btnNext.addEventListener('click', this._handleEnd)
  }

  end () {
      if(this.btnNext != null) this.btnNext.removeEventListener('click', this._handleEnd)
    this.onEvent._fire({event: 'sceneEnd', step: this.step})
  }

  get html () {
    return `<div>
              Current scene is : ${this.step}
              <div>
                <button class="btn-next">Next</button>
              </div>
            </div>`
  }
}