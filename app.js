const btn = document.querySelector("[data-exp]")
const btnProject = document.querySelector("[data-project]")
const experience = document.querySelector(".experience")
const project = document.querySelector(".project")

btn.addEventListener("click", () => {
    experience.classList.toggle("hide")
})

btnProject.addEventListener("click", () => {
	project.classList.toggle("hide")
})