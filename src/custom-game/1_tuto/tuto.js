import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'tutorial'

class Scene extends GameScene {

  get STEP () { return STEP_VALUE }

  constructor () {
  	super(STEP_VALUE)
  }

  get html () {
    return `<div class="tuto">
    					<br>
              ${polyglot.t('This is step', {step: this.step})}
              <br>
              <div>
              	<br>
								${polyglot.t('lorem')}
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
