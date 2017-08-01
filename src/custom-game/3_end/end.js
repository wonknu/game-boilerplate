import GameScene from '../../gameModule/GameScene'

const STEP_VALUE = 'end'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)

    this._result = null
  }

  set result(result) {
    this._result = result
  }

  get html() {
    let questionList = ''
    for (var i = 0; i < this._result.anwsers.length; i++) {
      questionList += `<li>
                          <div>${this._result.anwsers[i].goodAnswer
                            ? '✅'
                            : '❌'}</div>
                          <div>Question : ${this._result.anwsers[i]
                            .question}</div>
                          <div>Information : ${this._result.anwsers[i]
                            .info}</div>
                          <hr/>
                      </li>`
    }
    return `<div class="end">
    					<br>
              ${polyglot.t('This is step', { step: this.step })}
              <br>
              <div>
              	<br>
              	<ul>
                  ${questionList}
                </ul>
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
