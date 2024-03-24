import allQuestions from "./questions.js"
import { data } from "./script.js";

const questions = []

const allQuestionsData = allQuestions()

export function giveQuestions() {
    allQuestionsData.forEach(question => {
        if (question.category === data.category && question.dificulty === data.dificulty) {
            questions.push(question)
        }
    });
}

export default questions