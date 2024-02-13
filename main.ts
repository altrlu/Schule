function Linienzeichnen (num: number) {
    for (let Index = 0; Index <= 4; Index++) {
        led.plot(num, Index)
    }
    basic.pause(100)
    for (let Index = 0; Index <= 4; Index++) {
        led.unplot(num, Index)
    }
}
basic.forever(function () {
	
})
