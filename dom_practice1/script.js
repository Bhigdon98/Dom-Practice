let button = document.querySelectorAll('input[type="checkbox"]');
// button.forEach(myFunction);
function myFunction(tst){
        tst.addEventListener('click',() =>{
        console.log(tst.parentElement.style)
        // document.querySelector('span.emphasized-word').computedStyleMap.color=
        // button.innerHTML;
        tst.parentElement.style.backgroundColor = 'black'
    })
        
    }

button.forEach(myFunction);