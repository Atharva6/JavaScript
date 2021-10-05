let counter = document.querySelector('.count');
let yt = document.querySelector('.para');

let count = 0;

setInterval( () => {
    if(count < 10000){
        count++;
        counter.innerText = count;
    }
}, 1);

