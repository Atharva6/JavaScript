let click = document.getElementById('click');
let test = document.getElementById('test');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let inp = document.getElementById('inp');
let timed = document.getElementById('time');
let add_btn = document.getElementById('add');
let text = document.getElementById('text');
let card = document.querySelector('.card');
let dark = document.getElementById('dark');
let light = document.getElementById('light');
let container = document.querySelector('.container');
let fav_btn = document.querySelector('button#fav')
let count = 0;
let time;

click.addEventListener('click', ()=>{
    if(test.style.display != "none"){
        test.style.display = "none";
    }
    else{
        test.style.display = "block";
    }
})

plus.addEventListener('click', ()=>{
    count++;
    inp.innerHTML = count;
})

minus.addEventListener('click', ()=>{
    count--;
    inp.innerHTML = count;
})

// fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
//     .then(data =>{
//         return data.json()
//     })
//     .then(realdata =>{
//         console.log(realdata)
//         const myData = realdata.MH.dates;

//     })
//     .catch(error =>{
//         console.log(error)
//     })

setInterval(() => {
    let a = new Date();
    time = a.getHours() + ':' + a.getMinutes()  + ":" + a.getSeconds();
    timed.innerHTML = time;
}, 1000);

add_btn.addEventListener('click', ()=>{
    let value = text.value;
    
    if(value.length == 0){
        alert("Please Add a Note");
    }
    else{
        card.innerHTML += `
            <div class="card">
                <div class="output">
                    <h1> Note </h1>
                    <p> ${value} </p>  
                </div>
            </div>   
            `;
        // Adding to LS
        LSvalue = localStorage.getItem('mess');
        if(LSvalue == null){
            obj = [];
        }
        else{
            obj = JSON.parse(LSvalue);
        }
        obj.push(text.value);
        localStorage.setItem('mess', JSON.stringify(obj));
        text.value = "";
        console.log(obj)
    }
})

dark.addEventListener('click', ()=>{
    container.classList.add('color');
})
light.addEventListener('click', ()=>{
    container.classList.remove('color');
})

// fav_btn.addEventListener('click', ()=>{
//     fav_btn.classList.add('active')
// })
// fav_btn.addEventListener('dblclick', ()=>{
//     fav_btn.classList.remove('active')
// })


