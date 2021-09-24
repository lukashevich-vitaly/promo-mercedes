const moreBtns = document.querySelectorAll(".more")
const modal = document.querySelector(".modal")

for (let btn of moreBtns) {
    btn.addEventListener('click', () => modal.classList.remove("hidden"))
    modal.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add("hidden")
    }
})
}
