function URFlednums (Number2: number) {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.unplot(index2, index)
        }
    }
    if (Number2 == 0) {
        let index = 0
        let index2 = 0
        led.unplot(index2, index)
    }
}
