document.querySelectorAll('.button-color').forEach(button =>{
    button.addEventListener('click',() =>{
        document.querySelector('.emphasized-word').style.color = button.textContent
    })

})

