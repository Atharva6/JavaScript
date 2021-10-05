console.log("Togetherness is IMP!");

// Constants and Variables
const new_btn = document.getElementById('new');
let para = document.getElementById('para');
let author = document.getElementById('author');




// Add Event Listner
function purpink(){
    console.log("123")
    document.body.style.backgroundColor = "#ee9ca7";
}

function red(){
    document.body.style.backgroundColor = "#ee9ca7";
}

function black(){
    document.body.style.backgroundColor = "black";
}

let realdata = "";
new_btn.addEventListener('click', async ()=>{
    let data = await fetch('https://type.fit/api/quotes')
    realdata = await data.json();
    getNewQuotes();
})

const getNewQuotes = () =>{
    let random = Math.floor(Math.random() * 10);
    // console.log(realdata[random].author);
    // console.log(realdata[random].text);
    para.innerHTML =  `${realdata[random].text}`;
    author.innerHTML = `<span> - </span>${realdata[random].author}`;
}
