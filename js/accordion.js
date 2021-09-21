const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

//btns.addEventListener('click', () => alert('Clicked button'));

/*for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => alert('Clicked button'));
}*/

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        
        btns.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active')
        })
       
        btnItem.classList.add('feature__link_active')
        
        lists.forEach((listItem) => {
            listItem.classList.add('hidden')
        })

        lists[index].classList.remove('hidden')

    })
})