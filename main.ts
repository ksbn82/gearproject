basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.toggle(index2, index)
            basic.pause(50)
        }
    }
})
