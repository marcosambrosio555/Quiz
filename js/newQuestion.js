import questions from "./chooseCategory.js";
import { data } from "./script.js";

const questionHTML = document.querySelector(".question")
const btnOptions = document.querySelectorAll(".options .btn-option")

export function newQuestion() {
    const questionRandom = Math.floor(Math.random() * questions.length)

    const questionChoosed = questions[questionRandom]
    questionHTML.innerHTML = questionChoosed.question

    let order = []

    do {
        const numRandom = Math.floor(Math.random() * 4)
        if (!order.includes(numRandom)) {
            order.push(numRandom)
        }
    } while (order.length < 4)


    btnOptions.forEach((btn, index) => {
        btn.innerHTML = `${questionChoosed.options[order[index]]}`
        btn.id = questionChoosed.options[order[index]]
    })

    questions.splice(questionRandom, 1)

    data.answer = questionChoosed.answer
}