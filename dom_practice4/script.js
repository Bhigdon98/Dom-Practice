let small = document.querySelector('.font-size-down')
let medium = document.querySelector('.font-default-size')
let large = document.querySelector('.font-size-up')

small.addEventListener('click',() => {
    document.querySelector('p[name= "main-text"]').style.fontSize = '2rem'
    console.log(document.querySelector(pname= 'main-text'))
})

medium.addEventListener('click',() => {
    document.querySelector('p[name= "main-text"]').style.fontSize = '4rem'
    console.log(document.querySelector(pname= 'main-text'))
})

large.addEventListener('click',() => {
    document.querySelector('p[name= "main-text"]').style.fontSize = '6rem'
    console.log(document.querySelector(pname= 'main-text'))
})