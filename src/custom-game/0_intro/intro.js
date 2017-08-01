import GameScene from '../../gameModule/GameScene'
import { Loader } from '../../gameModule/loader'

const STEP_VALUE = 'intro'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }

  start() {
    setTimeout(() => {
      // fake loading time
      this.onEvent._fire({ event: 'sceneEnd', step: this.step })
    }, 500)
  }

  get html() {
    return `<div class="intro">
              <br>
              <div class="title">${polyglot.t('Gone in Lyon')}</div>
    					<br>
              <div>${Loader.html}</div>
              <br>
            </div>`
  }
}

export default new Scene()
