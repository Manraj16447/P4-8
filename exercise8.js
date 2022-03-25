let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

color.addEventListener('input',()=>{
    let color = colorInput.value;
    hexInput.value = color;
    // document.body.style.backgroundColor = color; 

    document.querySelector('h1').style.color = color;
})
