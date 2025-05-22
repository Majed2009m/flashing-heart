let A = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(A)
    A += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
