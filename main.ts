basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . # .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
})
