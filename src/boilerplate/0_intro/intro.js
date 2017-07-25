import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'intro'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }
}

export default new Scene()
