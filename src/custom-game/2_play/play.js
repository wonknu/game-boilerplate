import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'play'

class Scene extends GameScene {

  get STEP () { return STEP_VALUE }

  constructor () {
  	super(STEP_VALUE)
  }

  start () {
    this.btnWin = document.querySelector('.btn-next-win')
    this.btnLose = document.querySelector('.btn-next-lose')
    this._handleEnd = this.end.bind(this)
    this.btnWin.addEventListener('click', this._handleEnd)
    this.btnLose.addEventListener('click', this._handleEnd)
  }

  end (e) {
    if(this.btnWin != null) this.btnWin.removeEventListener('click', this._handleEnd)
    if(this.btnLose != null) this.btnLose.removeEventListener('click', this._handleEnd)
    this.onEvent._fire({event: 'sceneEnd', step: this.step, win: (parseInt(e.target.getAttribute('data-win')) === 0)})
  }

  get html () {
    return `<div class="play">
    					<br>
              ${polyglot.t('This is step', {step: this.step})}
              <br>
              <br>
              <div>
                <button class="btn-next-win" data-win="0">
                	${polyglot.t('Win !')}
                </button>
                <button class="btn-next-lose" data-win="1">
                	${polyglot.t('Lose !')}
                </button>
              </div>
            </div>`
  }

}

export default new Scene()
