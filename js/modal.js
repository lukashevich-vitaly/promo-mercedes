const moreBtn = document.querySelector(".more")
const modal = document.querySelector(".modal")
console.log(moreBtn);
console.log(modal);

moreBtn.addEventListener('click', () => modal.classList.remove("hidden"))
modal.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add("hidden")
    }
})