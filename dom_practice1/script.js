let button = document.querySelectorAll('.button-color');
button.forEach(myFunction);
function myFunction(){
    function myFunction(button){
        button.addEventListener('click',() =>{
            document.querySelector('spam.emphasized-word').computedStyleMap.color=
            button.innerHTML;
        })
    }
}