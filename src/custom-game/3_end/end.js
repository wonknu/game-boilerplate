import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'end'

class Scene extends GameScene {

  get STEP () { return STEP_VALUE }

  constructor () {
  	super(STEP_VALUE)

  	this._result = false
  }

  set result (result) {
  	this._result = result
  }

  get html () {
    return `<div class="end">
    					<br>
              ${polyglot.t('This is step', {step: this.step})}
              <br>
              <div>
              	<br>
              	${polyglot.t(this._result ? 'You Win !' : 'You Lose !')}
              	<br>
              	<br>
                <button class="btn-next">
                	${polyglot.t('Go to next step')}
                </button>
              </div>
            </div>`
  }

}

export default new Scene()
