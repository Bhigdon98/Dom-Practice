let button = document.getElementById('show-window')
let box = document.querySelector('.window')
let ex = document.querySelector('#close-window')

button.addEventListener('click',() =>{
    box.classList.toggle('hidden')
    console.log(button.classList)
}
)

ex.addEventListener('click',() =>{
    box.classList.add('hidden')
})

