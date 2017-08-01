import Polyglot from 'node-polyglot'

import fr from './fr.json'
import gb from './gb.json'

var langs = { fr, gb }

window.userLang = navigator.language
window.polyglot = new Polyglot({ phrases: langs[userLang] })
