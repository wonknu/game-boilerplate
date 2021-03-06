import GameModule from '../gameModule/GameModule'

import { Intro } from './0_intro'
import { Tuto } from './1_tuto'
import { Play } from './2_play'
import { End } from './3_end'
import { Outro } from './4_outro'

export default class Game extends GameModule {
  static get TYPE() {
    return 'default'
  }
  static get NAME() {
    return 'boilerplate'
  }

  constructor() {
    super(Game.TYPE)

    this.scene = Intro
  }

  sceneEnd(evt) {
    switch (evt.step) {
      case Intro.STEP:
        this.scene = Tuto
        break
      case Tuto.STEP:
        this.scene = Play
        break
      case Play.STEP:
        this.scene = End
        break
      case End.STEP:
        this.scene = Outro
        break
      case Outro.STEP:
        console.log('the game is over')
        break
    }
  }
}
