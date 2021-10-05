console.log("This is Alive");

const IncreaseBtn = document.getElementById('inc');
const ResetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('dec');

const p = document.getElementById('para');

let count = 0;

IncreaseBtn.addEventListener('click', function(){
        count++
        p.innerHTML = count;
})

ResetBtn.addEventListener('click', function(){
        count = 0;
        p.innerHTML = count;
})

decreaseBtn.addEventListener('click', function(){
        count--
        p.innerHTML = count;
})