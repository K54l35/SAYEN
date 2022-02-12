let tempo = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    tempo = randint(100, 10000)
    basic.showIcon(IconNames.Happy)
    basic.pause(tempo)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(tempo)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . # .
        . # # . .
        `)
    basic.pause(tempo)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
