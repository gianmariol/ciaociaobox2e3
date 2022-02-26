/**
 * Prof. Maffucci Michele
 * 
 * https://www.maffucci.it
 */
radio.onReceivedNumber(function (receivedNumber) {
    // Se viene ricevuto il valore 1 il servomotore del box 2 viene fermato e successivamente ruotato in senso antiorario di 90 °
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    }
    // Se viene ricevuto il valore 2 il servomotore del box 3 viene fermato e successivamente ruotato in senso antiorario di 90 °
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    }
})
/**
 * Le due istruzioni: "set pull pin" sono importanti, se non inserite potrebbero danneggiare la scheda
 */
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P1, 0)
// IMPORTANTE abilitare la resistenza di Pull Up sul Pin 2
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
// IMPORTANTE abilitare la resistenza di Pull Up sul Pin 8
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    // Se il pulsante connesso al pin P2 viene premuto sul pin P2 viene impostato il valore 0, in tal caso viene inviato il numero 1
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(1)
        basic.pause(200)
    }
    // Se il pulsante connesso al pin P8 viene premuto sul pin P8 viene impostato il valore 0, in tal caso viene inviato il numero 2
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendNumber(2)
        basic.pause(200)
    }
})
