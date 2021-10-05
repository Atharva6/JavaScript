let img1 = document.getElementById('light');
let img2 = document.getElementById('light1');

img1.addEventListener('click', ()=>{
    if(img2.style.display != "none"){
        img2.style.display = "none";
    }
    else{
        img2.style.display = "block";
    }
})