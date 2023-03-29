let strip: neopixel.Strip = null
for (let index = 0; index < 4; index++) {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(5000)
    strip.showRainbow(1, 360)
    basic.pause(2000)
}
basic.forever(function () {
	
})
