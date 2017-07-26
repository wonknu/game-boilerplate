Game boilerplate
================

### Install

```
git clone git@github.com:wonknu/game-boilerplate.git
```

```
npm i
```

### Running

#### dev

```
npm run watch
```

#### prod

```
npm run build:prod
```

### Create new game

duplicate ```/src/boilerplate``` and rename it has you want.

Inside this boilerplate there is a file Game.js which is the main entry point, this file extends /src/gameModule/GameModule.js (this file is a scene manager and all game should extends from it)

there is also some folders

- 0_intro: contains the intro of the scene
- 1_tuto: contains the tuto of the scene
- 2_play: contains the play of the scene
- 3_end: contains the end of the scene
- 4_outro: contains the outro of the scene

each folder contains index.js (all it does is import a scene and a style scss), styles.scss and a scene (the name depends on the scene it should show)
all scene object extends /src/gameModule/GameScene.js which manage the life of a scene (start, end etc ...)

### Styling

styles folder is for common style, if you need to style a game with use the styles files from the scenes folder

This project include [simplegrid](http://simplegrid.io/)

### Localisation

This project have [node-polyglot](https://github.com/airbnb/polyglot.js) from airbnb installed
a variable polyglot is avaliable globally, just use it this way :

```
`some static text ${polyglot.t('some localised text')}`
```

inside src/locales folder there is the json files for translated key/value
example (gb.json) :

```
{
	"some localised text": "some localised text in english"
}
```

