console.log("Running");

const btn = document.getElementById('Click_btn');
btn.addEventListener('click', ()=>{
    let text = document.querySelector('.text');
    if(text.style.display != 'none'){
        text.style.display = 'block';
    }
})

const iconBtn = document.getElementById('icon_times');
iconBtn.addEventListener('click', ()=>{
    text = document.querySelector('.text');
    if(text.style.display = "block"){
        text.style.display = "none";
    }
})