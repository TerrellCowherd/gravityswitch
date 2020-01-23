enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const HeroProjectile = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
}
function bossbehavior () {
    boss.setFlag(SpriteFlag.BounceOnWall, true)
    boss.setImage(img`
. . . . . . . . . . . . . . f f f f f . . . . . . . . 
. . . . . . . . . . . . . f b b b b b f . . . . . . . 
. . . . . . . . . . . . f c 1 1 c b b b f . . . . . . 
. . . . . f f f . . . . f 1 b f 1 c b b 2 f . . . . . 
. . . f f c c f . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . f 2 c f c c f . . . f 1 c c 1 c b b 2 f . . . . . 
. f 2 f f 2 f c c f . . f c 1 1 c b b b f . . . . . . 
. . f 2 f f . f c c f f . f b b b b b f . . . . . . . 
. f 2 f . . . f c c c c f f f f f f f b f . . . . . . 
. . f . . . . f c c c b b b f b b b b b c f f f . . . 
. . . . . . f 2 c c b b b b f b b b b f c c c c f . . 
. . . . . f 2 2 f f f f f f c c c b b f c c c c f . . 
. . . . f f f f . . . . . f b b b c c f f c c c f . . 
. . . . . . . . . . . . . f f f f b b f . f f f . . . 
. . . . . . . . . . . . . f b f . f f f . . . . . . . 
. . . . . . . . . . . . . f f f f f b f . . . . . . . 
. . . . . . . . . . . . . f c c c f f f f . . . . . . 
. . . . . . . . . . . . . f c c c f c c f . . . . . . 
. . . . . . . . . . . . . . f c c f c c c f . . . . . 
. . . . . . . . . . . . . . . f c f c c c f . . . . . 
. . . . . . . . . . . . . . . . f f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`)
    boss.vx = 0
    boss.vy = 50
    while (true) {
        bossattack()
    }
}
function bg () {
    scene.setBackgroundColor(11)
    effects.clouds.startScreenEffect()
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5],
            TileScale.Sixteen
        ))
    scene.centerCameraAt(100, 0)
}
function hero () {
    roboboy = sprites.create(img`
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . f f f 5 1 1 1 1 1 1 1 f f f f . . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . . f 6 6 1 f 1 1 1 1 1 f 1 6 6 f . . . . . . . . . 
. . . . f f 1 1 f f f f f f 1 f f . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 f 1 f . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 f f . . . . . . . . . . . . . 
. . . . . . . f 1 1 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . f 6 6 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . f f f f f 1 f f . . . . . . . . . . . . 
. . . . . . . . f 1 f f f 6 6 f . . . . . . . . . . . 
. . . . . . . . f f f 6 6 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 f 6 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 6 f 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . 
. . . . . . . . f 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . f 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(roboboy, 70, 0)
    roboboy.ay = 50
    info.setLife(5)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    roboboy.setImage(img`
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . f f f 5 1 1 1 1 1 1 1 f f f f . . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . f 6 6 6 f 1 1 1 f 1 f 1 f 6 6 6 f . . . . . . . . 
. . . f 6 6 1 f 1 1 1 1 1 f 1 6 6 f . . . . . . . . . 
. . . . f f 1 1 f f f f f f 1 f f . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 f 1 f . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 f f . . . . . . . . . . . . . 
. . . . . . . f 1 1 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . f 6 6 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . f f f f f 1 f f . . . . . . . . . . . . 
. . . . . . . . f 1 f f f 6 6 f . . . . . . . . . . . 
. . . . . . . . f f f 6 6 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 f 6 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 6 f 6 6 f . . . . . . . . . . . 
. . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . 
. . . . . . . . f 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . f 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . . 
`)
    roboboy.ay = 50
})
function herodamage2 () {
    info.changeLifeBy(-1)
    roboboy.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 f 1 1 1 f f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . f f f f 5 1 f f f 1 f f f f f f . . . . . . . . . 
. f 6 6 6 1 f 1 1 1 1 1 1 1 f 6 6 6 f . . . . . . . . 
f 6 6 6 6 1 1 f 1 1 1 1 1 f 1 6 6 6 6 f . . . . . . . 
f 6 6 6 6 f 1 1 f f f f f f 1 6 6 6 6 f . . . . . . . 
f 6 6 6 f f f 1 1 1 1 1 f 1 f f 6 6 6 f . . . . . . . 
. f f f . . . f 1 1 1 1 f f . . f f f . . . . . . . . 
. . . . . . . f 1 1 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . f 6 6 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 f f f f . . . . . . . . . . . . 
. . . . . . . f f f f f 6 6 6 f . . . . . . . . . . . 
. . . . . . f 6 f 1 f f 6 6 6 f . . . . . . . . . . . 
. . . . . . f 6 6 f f f 6 6 6 6 f . . . . . . . . . . 
. . . . . f 6 6 6 6 f f 6 6 6 6 6 f . . . . . . . . . 
. . . . . f 6 6 6 6 f f 6 6 6 6 6 f . . . . . . . . . 
. . . . f 6 6 6 6 f . . f f f f f . . . . . . . . . . 
. . . . f 6 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . f 6 6 6 f . . . . . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . . . . 
`)
    projectile.destroy()
    projectile2.destroy()
    projectile3.destroy()
}
function boss2 () {
    boss = sprites.create(img`
. . . . . . . . . . . . . . f f f f f . . . . . . . . 
. . . . . . . . . . . . . f b b b b b f . . . . . . . 
. . . . . . . . . . . . f c 1 1 c b b b f . . . . . . 
. . . . . . . . . . . . f 1 b f 1 c b b 2 f . . . . . 
. . . . . . . . . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . . . . . . . . . . . f 1 c c 1 c b b 2 f . . . . . 
. . . . . . . . . . . . f c 1 1 c b b b f . . . . . . 
. . . . . . . . . . . . . f b b b b b f . . . . . . . 
. . . . . . . . . . . . . f f f f f f b f . . . . . . 
. . . . . . . . . . f f f b f b b b b b c f f f . . . 
. . . . . . . . . f c c c c f b b b b f c c c c f . . 
. . . . . . . . . f c c c f c c c b b f c c c c f . . 
. . . . . . . . . f c c c f b b b c c f f c c c f . . 
. . . . . . . . . . f f f f f f f b b f . f f f . . . 
. . . . . . . . . . . . . f b f . f f f . . . . . . . 
. . . . . . . . . . . . . f f f f f b f . . . . . . . 
. . . . . . . . . . . . . f c c c f f f f . . . . . . 
. . . . . . . . . . . . . f c c c f c c f . . . . . . 
. . . . . . . . . . . . . . f c c f c c c f . . . . . 
. . . . . . . . . . . . . . . f c f c c c f . . . . . 
. . . . . . . . . . . . . . . . f f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`, SpriteKind.Boss)
    boss.setPosition(200, 58)
    boss.vx = -10
    pause(4000)
    bossbehavior()
}
function bossattack () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, boss, -90, 0)
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, boss, -90, 35)
    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . . . 
f 2 2 2 2 2 2 2 2 f f f . . . . . . . . . . . . . 
. f 2 2 2 2 2 2 f . . . . . . . . . . . . . . . . 
. . f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, boss, -90, -35)
    pause(1500)
}
function herodamage () {
    info.changeLifeBy(-1)
    heliboy.setPosition(200, Math.randomRange(20, 100))
    roboboy.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 f 1 1 1 f f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . f f f f 5 1 f f f 1 f f f f f f . . . . . . . . . 
. f 6 6 6 1 f 1 1 1 1 1 1 1 f 6 6 6 f . . . . . . . . 
f 6 6 6 6 1 1 f 1 1 1 1 1 f 1 6 6 6 6 f . . . . . . . 
f 6 6 6 6 f 1 1 f f f f f f 1 6 6 6 6 f . . . . . . . 
f 6 6 6 f f f 1 1 1 1 1 f 1 f f 6 6 6 f . . . . . . . 
. f f f . . . f 1 1 1 1 f f . . f f f . . . . . . . . 
. . . . . . . f 1 1 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . f 6 6 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 f f f f . . . . . . . . . . . . 
. . . . . . . f f f f f 6 6 6 f . . . . . . . . . . . 
. . . . . . f 6 f 1 f f 6 6 6 f . . . . . . . . . . . 
. . . . . . f 6 6 f f f 6 6 6 6 f . . . . . . . . . . 
. . . . . f 6 6 6 6 f f 6 6 6 6 6 f . . . . . . . . . 
. . . . . f 6 6 6 6 f f 6 6 6 6 6 f . . . . . . . . . 
. . . . f 6 6 6 6 f . . f f f f f . . . . . . . . . . 
. . . . f 6 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . f 6 6 6 f . . . . . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . . . . 
`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    herodamage2()
})
// when A is pressed, the hero shoots a projectile
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    roboboy.setImage(img`
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f f f f f . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f f 6 6 6 6 f . . . . . . . 
. . . . . . f 1 f f f f f f 1 6 6 6 6 6 f . . . . . . 
. . . f f f 6 1 1 1 1 1 f 1 1 6 6 6 6 6 f . . . . . . 
. . f 6 6 6 6 f 1 1 1 1 f f f 6 6 6 6 f . . . . . . . 
. . f 6 6 6 6 f 1 1 6 6 6 f . f f f f . . . . . . . . 
. . f 6 6 6 f f 6 6 1 1 1 f . . . . . . . . . . . . . 
. . . f f f . f 1 1 f f f f . . . . . . . . . . . . . 
. . . . . . . f f f . f 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 f f f f f . . . . . . . . . . . . . 
. . . . . . f f f f 6 6 6 f . . . . . . . . . . . . . 
. . . . . . f 6 6 f 6 6 6 f . . . . . . . . . . . . . 
. . . . . f 6 6 6 f 6 6 f . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f f . . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . . . . 
`)
    lemon = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . f f f . 
. . . . . . . . . . f 9 9 9 f 
. . . . . . . . . . f 9 9 9 f 
. . . . . . . . . . . f f f . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, roboboy, 200, 0)
    lemon.setKind(SpriteKind.HeroProjectile)
    music.pewPew.play()
})
function bossdamage () {
    info.changeScoreBy(1)
    // animates the boss
    animation.runImageAnimation(
    boss,
    [img`
. . . . . . . . . . . . . . f f f f f . . f . . . . . 
. . . . . f . . f f f . f f b b b b b f f . . . . . . 
. . . . . . . . . . f f f c 1 1 c b b b f . . f . . . 
. . . . . f f f . . . f f 1 b f 1 c b b 2 f . . . . . 
. . . f f c c f . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . f 2 c f c c f . . . f 1 c c 1 c b b 2 f . . f . . 
. f 2 f f 2 f c c f . . f c 1 1 c b b b f . . f . . . 
. . f 2 f f . f c c f f . f b b b b b f . . f . . . . 
. f 2 f . . . f c c c c f f f f f f f b f f f . . . . 
. . f . . . . f c c c b b b f b b b b b c f f f . . . 
. . . . . . f c c c b b b b f b b b b f c c c c f . . 
. . . . . f c c f f f f f f c c c b b f c c c c f . . 
. . . . f f f f . . . f f f b b b c c f f c c c f . . 
. . . . . . . . . . . f f f f f f b b f f f f f . . . 
. . . . . . . . . . f f . f b f . f f f f . . . . . . 
. . . . . . . . . f . . . f f f f f b f f . . f . . . 
. . . . . . . . f . . . . f c c c f f f f f . . . . . 
. . . . . . . . . . . . . f c c c f c c f f . . . . . 
. . . . . . . . . . f . . . f c c f c c c f f . . . . 
. . . . . . . . . . . . . . f f c f c c c f . f . . . 
. . . . . . . . . . . . . f . f f f c c c f . . . . . 
. . . . . . . . . . . . f . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . f . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . f f f f f . . . . . . . . 
. . . . . . . . . . . . . f b b b b b f . . . . . . . 
. . . . . . . . . . . . f c 1 1 c b b b f . . . . . . 
. . . . . f f f . . . . f 1 b f 1 c b b 2 f . . . . . 
. . . f f c c f . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . f 2 c f c c f . . . f 1 c c 1 c b b 2 f . . . . . 
. f 2 f f 2 f c c f . . f c 1 1 c b b b f . . . . . . 
. . f 2 f f . f c c f f . f b b b b b f . . . . . . . 
. f 2 f . . . f c c c c f f f f f f f b f . . . . . . 
. . f . . . . f c c c b b b f b b b b b c f f f . . . 
. . . . . . f c c c b b b b f b b b b f c c c c f . . 
. . . . . f c c f f f f f f c c c b b f c c c c f . . 
. . . . f f f f . . . . . f b b b c c f f c c c f . . 
. . . . . . . . . . . . . f f f f b b f . f f f . . . 
. . . . . . . . . . . . . f b f . f f f . . . . . . . 
. . . . . . . . . . . . . f f f f f b f . . . . . . . 
. . . . . . . . . . . . . f c c c f f f f . . . . . . 
. . . . . . . . . . . . . f c c c f c c f . . . . . . 
. . . . . . . . . . . . . . f c c f c c c f . . . . . 
. . . . . . . . . . . . . . . f c f c c c f . . . . . 
. . . . . . . . . . . . . . . . f f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . f f f f f . . f . . . . . 
. . . . . f . . f f f . f f b b b b b f f . . . . . . 
. . . . . . . . . . f f f c 1 1 c b b b f . . f . . . 
. . . . . f f f . . . f f 1 b f 1 c b b 2 f . . . . . 
. . . f f c c f . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . f 2 c f c c f . . . f 1 c c 1 c b b 2 f . . f . . 
. f 2 f f 2 f c c f . . f c 1 1 c b b b f . . f . . . 
. . f 2 f f . f c c f f . f b b b b b f . . f . . . . 
. f 2 f . . . f c c c c f f f f f f f b f f f . . . . 
. . f . . . . f c c c b b b f b b b b b c f f f . . . 
. . . . . . f c c c b b b b f b b b b f c c c c f . . 
. . . . . f c c f f f f f f c c c b b f c c c c f . . 
. . . . f f f f . . . f f f b b b c c f f c c c f . . 
. . . . . . . . . . . f f f f f f b b f f f f f . . . 
. . . . . . . . . . f f . f b f . f f f f . . . . . . 
. . . . . . . . . f . . . f f f f f b f f . . f . . . 
. . . . . . . . f . . . . f c c c f f f f f . . . . . 
. . . . . . . . . . . . . f c c c f c c f f . . . . . 
. . . . . . . . . . f . . . f c c f c c c f f . . . . 
. . . . . . . . . . . . . . f f c f c c c f . f . . . 
. . . . . . . . . . . . . f . f f f c c c f . . . . . 
. . . . . . . . . . . . f . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . f . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . f f f f f . . . . . . . . 
. . . . . . . . . . . . . f b b b b b f . . . . . . . 
. . . . . . . . . . . . f c 1 1 c b b b f . . . . . . 
. . . . . f f f . . . . f 1 b f 1 c b b 2 f . . . . . 
. . . f f c c f . . . . f 1 f c 1 1 f b 2 f . . . . . 
. . f 2 c f c c f . . . f 1 c c 1 c b b 2 f . . . . . 
. f 2 f f 2 f c c f . . f c 1 1 c b b b f . . . . . . 
. . f 2 f f . f c c f f . f b b b b b f . . . . . . . 
. f 2 f . . . f c c c c f f f f f f f b f . . . . . . 
. . f . . . . f c c c b b b f b b b b b c f f f . . . 
. . . . . . f c c c b b b b f b b b b f c c c c f . . 
. . . . . f c c f f f f f f c c c b b f c c c c f . . 
. . . . f f f f . . . . . f b b b c c f f c c c f . . 
. . . . . . . . . . . . . f f f f b b f . f f f . . . 
. . . . . . . . . . . . . f b f . f f f . . . . . . . 
. . . . . . . . . . . . . f f f f f b f . . . . . . . 
. . . . . . . . . . . . . f c c c f f f f . . . . . . 
. . . . . . . . . . . . . f c c c f c c f . . . . . . 
. . . . . . . . . . . . . . f c c f c c c f . . . . . 
. . . . . . . . . . . . . . . f c f c c c f . . . . . 
. . . . . . . . . . . . . . . . f f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f c c c f . . . . . 
. . . . . . . . . . . . . . . . . f f f f . . . . . . 
`],
    50,
    false
    )
    if (info.score() == 200) {
        game.over(true)
    }
}
function enemy () {
    heliboy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    heliboy,
    [img`
. . . 1 1 1 . . . . . . . . . . 
. 1 1 . . . . . . . . . . 1 . . 
1 . . . . . . . . . . . . . 1 . 
1 . . . . . . . . . . . . . 1 . 
. 1 . . . . . f . . . . 1 1 . . 
. . . . . . . f . 1 1 1 . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 6 7 7 7 6 f . . . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f 7 7 7 7 5 7 7 5 f . . . 
. . . f 7 7 7 5 5 7 7 5 f . . . 
. . . f 5 7 5 5 5 7 7 4 f . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f f 6 7 7 7 6 f . . . . . 
. . . . f f f f f f . . . . . . 
`,img`
. . . . . . . 1 1 1 . . . . . . 
. . . . . . . . . . 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 . . f . . . . . . . . 
. . . . . 1 1 f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 6 7 7 7 6 f . . . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f 7 7 7 7 2 7 7 5 f . . . 
. . . f 7 7 7 2 2 7 7 5 f . . . 
. . . f 2 7 2 2 2 7 7 4 f . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f f 6 7 7 7 6 f . . . . . 
. . . . f f f f f f . . . . . . 
`,img`
. . . . . . . . . 1 1 1 . . . . 
. 1 . . . . . . . . . . 1 1 . . 
1 . . . . . . . . . . . . . 1 . 
1 . . . . . . . . . . . . . 1 . 
. 1 1 . . . . f . . . . . 1 . . 
. . . 1 1 1 . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 6 7 7 7 6 f . . . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f 7 7 7 7 4 7 7 5 f . . . 
. . . f 7 7 7 4 4 7 7 5 f . . . 
. . . f 4 7 4 4 4 7 7 4 f . . . 
. . . f 6 7 7 7 7 7 6 f . . . . 
. . . f f 6 7 7 7 6 f . . . . . 
. . . . f f f f f f . . . . . . 
`],
    50,
    true
    )
    heliboy.setPosition(200, Math.randomRange(20, 100))
    heliboy.setVelocity(-30, 0)
}
sprites.onOverlap(SpriteKind.Boss, SpriteKind.HeroProjectile, function (sprite, otherSprite) {
    if (boss.vx == 0) {
        bossdamage()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    herodamage()
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile1, function (sprite, location) {
    heliboy.setPosition(200, Math.randomRange(20, 100))
})
function enemydamage () {
    heliboy.setPosition(200, Math.randomRange(20, 100))
    heliboy.vx += -2
    info.changeScoreBy(1)
    if (info.score() == 30) {
        heliboy.destroy()
        boss2()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    roboboy.setImage(img`
. . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . . f 5 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . f 1 f f f f f f . . . . . . . . . . . . . 
. . . f f f 6 1 1 1 1 1 f 1 f f f . . . . . . . . . . 
. . f 6 6 6 6 f 1 1 1 1 f 6 6 6 6 f . . . . . . . . . 
. . f 6 6 6 6 f 1 1 6 6 6 f 6 6 6 f . . . . . . . . . 
. . f 6 6 6 f f 6 6 1 1 1 f 6 6 6 f . . . . . . . . . 
. . . f f f . f 1 1 f f f f f f f . . . . . . . . . . 
. . . . . . . f f f . f 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 f f f f f . . . . . . . . . . . . . 
. . . . . . f f f f 6 6 6 f . . . . . . . . . . . . . 
. . . . . . f 6 6 f 6 6 6 f . . . . . . . . . . . . . 
. . . . . f 6 6 6 f 6 6 f . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f f . . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . . . . 
`)
    roboboy.ay = -50
})
sprites.onOverlap(SpriteKind.HeroProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemydamage()
})
let lemon: Sprite = null
let heliboy: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let roboboy: Sprite = null
let boss: Sprite = null
info.setScore(0)
hero()
bg()
enemy()
game.splash("Use Arrows to move.", "Press A to shoot.")
game.splash("Up/Down Arrows change", "gravity.")
game.splash("30 points summons the", "boss. 200 to win.")
