let x = 0
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
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(100)
        led.unplot(x, 0)
    }
    x = 3
    for (let index = 0; index < 3; index++) {
        led.plot(x, 0)
        basic.pause(100)
        led.unplot(x, 0)
        x += -1
    }
})
