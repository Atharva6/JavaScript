console.log("Fetch");

// Declaring variables and constants
let inp = document.getElementById('inp');

inp.addEventListener('keyup', async function(){
    const res = await fetch('app.json')
    let data = await res.json();
    console.log(data)
})
