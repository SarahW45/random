namespace SpriteKind {
    export const taco = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.say("yummy mushroom", 500)
})
let mySprite: Sprite = null
let mySprite3 = sprites.create(assets.image`taco`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`donut`, SpriteKind.Player)
mySprite = sprites.create(assets.image`mushroom`, SpriteKind.Food)
mySprite.setPosition(35, 60)
mySprite.setPosition(randint(15, 145), randint(15, 105))
