import Polyglot from 'node-polyglot'

import fr from './fr.json'
import gb from './gb.json'

var langs = {fr, gb}

window.polyglot = new Polyglot({phrases: langs[navigator.language]})
