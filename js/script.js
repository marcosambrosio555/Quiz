import { newQuestion } from "./newQuestion.js";
import './hit.js'
import { start } from "./timer.js";
import { giveQuestions } from "./chooseCategory.js";
const loading = document.querySelector(".loading")
const techTitle = document.querySelector(".top-center .tech")

export const data = {
    rights: 0,
    wrongs: 0,
    points: 0,
    pointsValue: 100,
    numberOfQuestions: 3,
    answer: "",
    order: 1,
    gameOn: false,
    name: "",
    dificulty: "",
    category: "",
}

const urlSearch = new URLSearchParams(window.location.search)

const name = urlSearch.get("name")
const dificulty = urlSearch.get("dificulty")
const tech = urlSearch.get("tech")

modalLoading()

function putData() {
    data.name = name
    data.dificulty = dificulty
    data.category = tech
    techTitle.innerHTML = tech
}

function init() {
    putData()
    giveQuestions()
    newQuestion()
    modalLoading()
    start()
}

setTimeout(() => {
    init()
}, 1500);

function modalLoading() {
    loading.classList.toggle("hide")
}