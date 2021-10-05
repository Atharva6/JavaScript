console.log("This is Saste Nashe");

const input = document.getElementById('input');
input.addEventListener('input', ()=>{
    let value = input.value;

    let gram = document.querySelector('p span.grm');
    let kilogram = document.querySelector('p span.kilogrm');
    let Ounce = document.querySelector('p span.ounces');

    gram.innerHTML = value/0.0022046;
    kilogram.innerHTML = value/2.2046;
    Ounce.innerHTML = value*16;
})