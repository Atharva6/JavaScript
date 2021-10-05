console.log("This is running")

// If Start Quiz button is Clicked
const start_btn = document.getElementById('start_btn');
const rules = document.querySelector('.Rules'); 
start_btn.addEventListener('click', function(){
    rules.classList.add('show');
})

// If Exit button is Clicked
const exit_btn = document.getElementById('exit_btn');
exit_btn.addEventListener('click', function(){
    rules.classList.remove('show')
})

// If Continue button is Clicked
const continue_btn = document.getElementById('continue_btn');
const mainSec = document.querySelector('.main-sec')
continue_btn.addEventListener('click', function(){
    rules.classList.remove('show')
    mainSec.classList.add('display')
})

// Main Logic Starts Here....
let n1 = Math.floor(Math.random()*100+1);
let n2 = Math.floor(Math.random()*100+1);

let first_no = document.getElementById('first_no').value = n1;
let Second_no = document.getElementById('Second_no').value = n2;

let answer = n1 + n2;

let check = document.getElementById('Check').addEventListener('click', function(){
    let user_ans = document.getElementById('output').value;
    if(user_ans == answer){
        alert("Well Done! The Answer is Correct");
    }
    else{
        alert("Try Again! The Correct Answer is " + answer)
    }
    document.getElementById('output').value = "";

    n1 = Math.floor(Math.random()*10+1);
    n2 = Math.floor(Math.random()*10+1);
    first_no = document.getElementById('first_no').value = n1;
    Second_no = document.getElementById('Second_no').value = n2;
    answer = n1 + n2;

})




