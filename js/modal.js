const btnModal = document.querySelector(".btn-modal")
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector(".background")

btnModal.addEventListener("click", () => {
    modal.classList.remove("hide")
})

btnClose.addEventListener("click", () => {
    modal.classList.add("hide")
})