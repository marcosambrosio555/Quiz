import { gameOver } from "./gameOver.js"
import { clear, rool } from "./hit.js"
import { newQuestion } from "./newQuestion.js"
import { data } from "./script.js"

const order = document.querySelector(".order")
order.innerHTML = 1


export function changeQuestion() {

    if (data.order >= data.numberOfQuestions) {
        setInterval(() => {
            gameOver("Fim do jogo")
        }, 4000)
    } else {
        setTimeout(() => {
            rool()
            setTimeout(() => {
                newQuestion()
                clear()
                data.gameOn = false
                data.order++
                order.innerHTML = data.order
                rool()
            }, 1000)
        }, 3000)
    }


}