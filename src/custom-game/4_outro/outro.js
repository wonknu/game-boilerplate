import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'outro'

class Scene extends GameScene {

  get STEP () { return STEP_VALUE }

  constructor () {
  	super(STEP_VALUE)
  }

  get html () {
    return `<div class="outro">
              <div>
                <br>
                ${polyglot.t('Game over')}
                <br>
              </div>
            </div>`
  }

}

export default new Scene()
