import GameScene from '../../gameModule/GameScene'
import { Stack, Direction } from 'swing' // https://github.com/gajus/swing

const STEP_VALUE = 'play'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }

  start() {
    this.btnWin = document.querySelector('.btn-next-win')
    this.btnLose = document.querySelector('.btn-next-lose')
    this._handleEnd = this.end.bind(this)
    this.btnWin.addEventListener('click', this._handleEnd)
    this.btnLose.addEventListener('click', this._handleEnd)

    this.cards = [].slice.call(document.querySelectorAll('#viewport ul li'))
    const stack = Stack()
    this.cards.forEach(targetElement => {
      stack.createCard(targetElement) // Add card element to the Stack.
    })

    stack.on('throwout', event => {
      // Add event listener for when a card is thrown out of the stack.
      // e.target Reference to the element that has been thrown out of the stack.
      // e.throwDirection Direction in which the element has been thrown (Direction.LEFT, Direction.RIGHT).
      console.log('Card has been thrown out of the stack.')
      console.log(
        'Throw direction: ' +
          (event.throwDirection == Direction.LEFT ? 'left' : 'right')
      )
    })

    stack.on('throwin', () => {
      // Add event listener for when a card is thrown in the stack, including the spring back into place effect.
      console.log('Card has snapped back to the stack.')
    })
  }

  end(e) {
    this.cards.destroy()

    if (this.btnWin != null)
      this.btnWin.removeEventListener('click', this._handleEnd)
    if (this.btnLose != null)
      this.btnLose.removeEventListener('click', this._handleEnd)
    this.onEvent._fire({
      event: 'sceneEnd',
      step: this.step,
      win: parseInt(e.target.getAttribute('data-win')) === 0
    })
  }

  get html() {
    return `<div class="play">
    					<div id="viewport">
                <ul class="stack">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
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
