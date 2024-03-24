import { data } from "./script.js"
import { interval } from "./timer.js"


const gameOverModal = document.querySelector(".background.game-over")
const titleHTML = document.querySelector(".background.game-over h2")

const rights = document.querySelector(".rights")
const wrongs = document.querySelector(".wrongs")
const points = document.querySelector(".points")

export function gameOver(title) {

    titleHTML.innerHTML = title
    points.innerHTML = `Pontos : ${data.points}`
    wrongs.innerHTML = `Respostas erradas : ${data.wrongs}`
    rights.innerHTML = `Respostas certas : ${data.rights}`

    clearInterval(interval)

    gameOverModal.classList.remove("hide")
}