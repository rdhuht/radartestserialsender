def on_forever():
    basic.pause(100)
    serial.write_line("" + str((input.acceleration(Dimension.STRENGTH))))
basic.forever(on_forever)
