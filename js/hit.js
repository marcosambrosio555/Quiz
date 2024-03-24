import { changeQuestion } from "./changeQuestions.js"
import { gameOver } from "./gameOver.js"
import { data } from "./script.js"

const wrapperMain = document.querySelector(".wrapper-main")

export const btnOptions = document.querySelectorAll(".options .btn-option")

btnOptions.forEach(btn => {
    btn.addEventListener("click", () => {
        if (data.gameOn === true) return
        if (btn.className === 'btn-option checking') return
        data.gameOn = true
        checking(btn)
    })
})

function checking(btn) {
    btn.classList.add("checking")
    setTimeout(() => {
        verification(btn)
    }, 1200)
}

function verification(btn) {

    if (btn.id === data.answer) {
        btn.classList.add("right")
        data.points += data.pointsValue
        data.rights++
    } else {
        btn.classList.add("wrong")
        data.wrongs++
    }

    btnOptions.forEach(btn => {
        if (btn.id === data.answer) {
            btn.classList.add("right")
        }
    })

    changeQuestion()

}



export function rool() {
    wrapperMain.classList.toggle("rool")
}

export function clear() {
    btnOptions.forEach(btn => {
        btn.className = 'btn-option'
    })
}