// wave is what we're changing the size of
// slider = interaction
// Look for what is being interacted with
// Add event listener
// look for what element needs to change
// add change

document.querySelector('#circleSlider').addEventListener('input',() => {
    document.querySelector('.wave').style.height = document.querySelector('.wave').style.width = document.getElementById('circleSlider').value + 'vh';

})
