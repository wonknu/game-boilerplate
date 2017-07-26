import { Promise } from 'bluebird'

class Popin {
  constructor() {
    this.popin = document.querySelector('.popin-wrapper')

    let pop = document.createElement('div')
    let popBody = document.createElement('div')
    popBody.classList.add('pop-body')
    this.popText = document.createElement('div')
    this.popText.classList.add('pop-text')
    this.popBtns = document.createElement('div')
    this.popText.classList.add('pop-text')

    this.popin.appendChild(pop)
    pop.appendChild(popBody)
    popBody.appendChild(this.popText)
    popBody.appendChild(this.popBtns)
  }

  close(el) {
    this.popin.classList.remove('on')
  }

  open(el) {
    this.popin.classList.add('on')
  }

  confirm() {
    return new Promise(resolve => {
      this.popBtns.innerHTML = `<div><button class="popin-yes">yes</button><button class="popin-no">no</button></div>`
      this.popText.innerHTML = `<div>${polyglot.t('quit game')}</div>`

      this.open()
      let result = evt => {
        let elClass = evt.target.classList
        var shouldClose =
          elClass.contains('popin-yes') ||
          elClass.contains('popin-no') ||
          elClass.contains('popin-wrapper')
        if (!shouldClose) return
        yes.removeEventListener('click', result)
        no.removeEventListener('click', result)
        this.popin.removeEventListener('click', result)
        this.close()
        resolve({ ok: elClass.contains('popin-yes') })
      }

      let yes = document.querySelector('.popin-yes')
      let no = document.querySelector('.popin-no')

      yes.addEventListener('click', result)
      no.addEventListener('click', result)
      this.popin.addEventListener('click', result)
    })
  }
}

export default new Popin()
