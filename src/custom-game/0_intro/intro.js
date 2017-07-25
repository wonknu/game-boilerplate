import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'intro'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }

  get html() {
    return `<div class="intro">
    					<br>
              ${polyglot.t('hello')}, ${polyglot.t('This is step', {
      step: this.step
    })}
              <br>
              <div>
              	<br>
                <button class="btn-next">
                	${polyglot.t('Go to next step')}
                </button>
              </div>
            </div>`
  }
}

export default new Scene()
