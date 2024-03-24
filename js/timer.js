import { gameOver } from "./gameOver.js"

const timer = document.querySelector(".timer")
let interval

function start() {
    let min = 10
    let seg = 0
    let segZero
    let minZero



    timer.innerHTML = `${min}:0${seg}`

    interval = setInterval(time, 1000)

    function time() {
        if (seg > 0) {
            seg--
        } else {
            if (min > 0) {
                seg = 59
                min--
            } else {
                setTimeout(() => {
                    gameOver('Fim do tempo')
                }, 2000)
            }
        }
        min < 10 ? minZero = '0' : minZero = ''
        seg < 10 ? segZero = '0' : segZero = ''


        timer.innerHTML = `${minZero}${min}:${segZero}${seg}`
    }
}

export { interval, start }