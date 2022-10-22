serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
let list: number[] = []
for (let index = 0; index <= 180; index++) {
    list.push(index)
}
basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        serial.writeLine("/" + "*" + list[index] + "," + randint(200, 300) + "*" + "/")
        basic.pause(500)
    }
    for (let index = 0; index <= 180; index++) {
        serial.writeLine("/" + "*" + list[180 - index] + "," + randint(200, 300) + "*" + "/")
        basic.pause(500)
    }
})
