console.log("This is a Music App");

let img1 = document.getElementById('img1');
let music1 = document.getElementById('Garmi');

let img2 = document.getElementById('img2');
let music2 = document.getElementById('Karrar');

let img3 = document.getElementById('img3');
let music3 = document.getElementById('Nehu');

let img4 = document.getElementById('img4');
let music4 = document.getElementById('Aankhon');


function playGarmi(){
    if(Garmi.paused){
        Garmi.play();
    }
    else{
        Garmi.pause();
    }
}
function playKarrar(){
    if(Karrar.paused){
        Karrar.play();
    }
    else{
        Karrar.pause();
    }
}
function playNehu(){
    if(Nehu.paused){
        Nehu.play();
    }
    else{
        Nehu.pause();
    }
}
function playAankhon(){
    if(Aankhon.paused){
        Aankhon.play();
    }
    else{
        Aankhon.pause();
    }
}