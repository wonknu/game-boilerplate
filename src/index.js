import styles from './index.scss'
import GameBoilerplate from './boilerplate/Game'
import CustomGame from './custom-game/Game'

import Locales from './locales'

let currentGame = null

document.querySelector('.boilerplate').addEventListener('click', e => {
  if (currentGame != null) currentGame.destroy()
  currentGame = new GameBoilerplate()
})

document.querySelector('.custom').addEventListener('click', e => {
  if (currentGame != null) currentGame.destroy()
  currentGame = new CustomGame()
})

			document.querySelector('.quit-game').addEventListener('click', e => {
	  	if (currentGame != null) window.onEvent._fire({ event: 'quit' })
})