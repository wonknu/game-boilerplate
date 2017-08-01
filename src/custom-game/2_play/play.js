import GameScene from '../../gameModule/GameScene'
import QUESTIONS from '../../../data/questions-gone-in-lyon.json'
import { Stack, Direction } from 'swing'

const STEP_VALUE = 'play'
const NUMBER_OF_CARDS = 10

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
    this.currentQuestions = []
    this.getQuestions()
  }

  getQuestions() {
    let questions = [].concat(QUESTIONS)
    while (this.currentQuestions.length < NUMBER_OF_CARDS) {
      this.currentQuestions.push(
        questions.splice(Math.floor(Math.random() * questions.length), 1)[0]
      )
    }
  }

  start() {
    this.circleLeft = document.querySelector('.circle-left')
    this.circleRight = document.querySelector('.circle-right')
    this.cards = []
    let cards = [].slice.call(document.querySelectorAll('#viewport ul li'))
    const stack = Stack({
      allowedDirections: [Direction.LEFT, Direction.RIGHT]
    })
    Array.prototype.forEach.call(cards, card => {
      this.cards.push(stack.createCard(card))
    }) // Add card element to the Stack.

    stack.on('throwout', e => {
      this.resetCircle()
      let selectedCircle =
        e.throwDirection == Direction.LEFT ? this.circleLeft : this.circleRight
      let answer = parseInt(e.target.getAttribute('data-question'))
      if (
        (e.throwDirection == Direction.LEFT && answer === 0) ||
        (e.throwDirection == Direction.RIGHT && answer === 1)
      ) {
        selectedCircle.classList.add('ok')
      } else {
        selectedCircle.classList.add('ko')
      }
      setTimeout(() => this.resetCircle(), 500)
    })

    stack.on('throwin', () => this.resetCircle())
    stack.on('dragstart', e => e.target.classList.add('moving'))
    stack.on('dragend', e => e.target.classList.remove('moving'))
    stack.on('dragmove', e => {
      this.resetCircle()
      if (e.throwDirection === Direction.LEFT)
        this.circleLeft.classList.add('on')
      else if (e.throwDirection === Direction.RIGHT)
        this.circleRight.classList.add('on')
    })
    stack.on('throwoutend', e => {
      e.target.classList.add('throwed')
      e.target.setAttribute(
        'data-answer',
        e.direction === Direction.LEFT ? 0 : 1
      )
      if (parseInt(e.target.getAttribute('data-index')) === 0)
        this.calculateScore()
      else
        this.setCircleText(
          this.currentQuestions[
            parseInt(e.target.getAttribute('data-index')) - 1
          ].id
        )
    })
  }

  resetCircle() {
    let classNames = ['on', 'ok', 'ko']
    for (var i = 0; i < classNames.length; i++) {
      this.circleLeft.classList.remove(classNames[i])
      this.circleRight.classList.remove(classNames[i])
    }
  }

  setCircleText(id) {
    console.log(id)
    this.circleLeft.textContent = QUESTIONS[id].choice[userLang].left
    this.circleRight.textContent = QUESTIONS[id].choice[userLang].right
  }

  calculateScore(win) {
    let userGame = { anwsers: [], points: 0 }
    let questionNodes = document.querySelectorAll('li.throwed')
    Array.prototype.forEach.call(questionNodes, questionNode => {
      let goodAnswer =
        questionNode.getAttribute('data-answer') ===
        questionNode.getAttribute('data-question')
      let id = questionNode.getAttribute('data-id')
      userGame.anwsers.push({
        goodAnswer: goodAnswer,
        id: id,
        index: questionNode.getAttribute('data-index'),
        question: QUESTIONS[id].question[userLang],
        info: QUESTIONS[id].info[userLang]
      })
      if (goodAnswer) userGame.points++
    })
    this.end(userGame)
  }

  end(userGame) {
    // true = win, false = lose
    Array.prototype.forEach.call(this.cards, card => card.destroy())
    this.onEvent._fire({
      event: 'sceneEnd',
      step: this.step,
      userGame: userGame
    })
    this.currentQuestions = []
    this.userGame = { anwsers: [], points: 0 }
  }

  get html() {
    let questionList = ''
    for (var i = 0; i < this.currentQuestions.length; i++) {
      questionList += `<li data-question="${this.currentQuestions[i].answer}" 
                        data-id="${this.currentQuestions[i].id}" 
                        data-left="${this.currentQuestions[i].choice[userLang]
                          .left}"
                        data-right="${this.currentQuestions[i].choice[userLang]
                          .right}"
                        data-index="${i}">
                        <div>${this.currentQuestions[i].question[
                          userLang
                        ]}</div>
                      </li>`
    }

    return `<div class="play">
    					<div id="viewport">
                <div class="circle circle-left">${this.currentQuestions[
                  NUMBER_OF_CARDS - 1
                ].choice[userLang].left}</div>
                <ul class="stack">
                  ${questionList}
                </ul>
                <div class="circle circle-right">${this.currentQuestions[
                  NUMBER_OF_CARDS - 1
                ].choice[userLang].right}</div>
              </div>
              <br>
            </div>`
  }
}

export default new Scene()
