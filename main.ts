controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.setTrace(true)
    myDart.throwDart()
})
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.confetti)
})
let myDart: Dart = null
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(120)
myDart = darts.create(img`
    . . . . . . . . . . 
    . . . . 6 . . . . . 
    . . . 8 f 8 . . . . 
    . . . . 8 . . . . . 
    . . . 8 f 8 . . . . 
    . . . . 9 . . . . . 
    . . . 8 f 8 . . . . 
    . . . . 8 . . . . . 
    . . . 8 d 8 . . . . 
    . . 8 e 1 e 8 . . . 
    `, SpriteKind.Player)
myDart.setStayInScreen(true)
myDart.controlWithArrowKeys(true)
