input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
    basic.pause(100)
})
