document.querySelectorAll('.bubbles').forEach(bubble =>{
    document.getElementById('bubblesColorPicker').addEventListener('input', () =>{
        bubble.style.background = document.getElementById('bubblesColorPicker').value
    })
})

document.getElementById('backgroundColorPicker').addEventListener('input', () =>{
   document.querySelector('.area').style.background = document.getElementById('backgroundColorPicker').value 
})