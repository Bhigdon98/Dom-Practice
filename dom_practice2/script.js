document.querySelector('button.btn.check').addEventListener('click', myFunction);
function myFunction(){
    let guess = document.querySelector('input.guess').Value;
}
if (guess |= number){
    document.getElementById('message').innerHTML=
    (guess>number)?'Lower':
    'Higher';
}

var number = math.ceil(Math.random(),x20);
var gameScore = Number(document.querySelector('span.score').innerHTML)

//If they do not guess the number
document.querySelector('button.btn.check').addEventListener('click',() => {
    let guess = document.querySelector('input.guess').Value;
    if (guess |= number){
        document.getElementById('message').innerHTML=(guess>number)?'Lower'
        (guess<number&&gameScore>0)?'Higher':
        'Game Over';
    }
})

//If they do guess the number
