import GameScene from '../../gameModule/GameScene'
import { Tuto } from '../../gameModule/tuto'

const STEP_VALUE = 'tutorial'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }

  getHtmlSlide(count, text1, text2, imgSrc) {
    return `<div>
              <div>${polyglot.t('How to play', { count: count })}</div>
              <div>${polyglot.t(text1)} <strong>${polyglot.t(
      text2
    )}.</strong></div>
              <img src="${imgSrc}">
            </div>`
  }

  createTuto() {
    this.tuto = new Tuto()
    this.tuto.createSlide(
      this.getHtmlSlide(
        '01 / 03',
        'You have the right',
        '3 mistakes',
        '/assets/images/custom-game/tuto-1.png'
      )
    )
    this.tuto.createSlide(
      this.getHtmlSlide(
        '02 / 03',
        'You have the right',
        '3 mistakes',
        '/assets/images/custom-game/tuto-2.png'
      )
    )
    this.tuto.createSlide(
      this.getHtmlSlide(
        '03 / 03',
        'You have the right',
        '3 mistakes',
        '/assets/images/custom-game/tuto-3.png'
      )
    )
  }

  start() {
    this.createTuto()
    document.querySelector('.slider-tuto').appendChild(this.tuto.html)
    this.tuto.initSlider()

    super.start()
  }

  end() {
    this.tuto.destroySlider()
    super.end()
  }

  get html() {
    return `<div class="tuto">
    					<br>
              <div class="slider-tuto">
                
              </div>
              <div class="wrapper-btn-next">
                <button class="btn-next">
                	${polyglot.t('start')}
                </button>
              </div>
            </div>`
  }
}

export default new Scene()
