console.log("This is the first ever Number Game by Atharva");

let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');

let answer = Math.floor(Math.random()*100) + 1;
let guesses = 0;
let guessed_no = [];

function play(){
    let user_guess = document.getElementById('guess').value;
    if(user_guess < 1 || user_guess > 100 || user_guess == ''){
        alert("Please Guess a number between 1 - 100");
    }
    else{
        guessed_no.push(user_guess);
        guesses += 1;

        if(user_guess < answer){
            msg1.textContent = "Your Guess is too low";
            msg2.textContent = "No. of Guesses: " + guesses;
            msg3.textContent = "Guessed Numbers are " + guessed_no;
        }
        else if(user_guess > answer){
            msg1.textContent = "Your Guess is too High";
            msg2.textContent = "No. of Guesses: " + guesses;
            msg3.textContent = "Guessed Numbers are " + guessed_no;
        }
        else if(user_guess == answer){
            msg1.textContent = "Your Guess was OP";
            msg2.textContent = "The Number was " + answer;
            msg3.textContent = "You Guessed it in " + guesses + " guesses";
            document.getElementById('guess').disabled = true;
        }
    }
    user_guess = document.getElementById('guess').value = "";
}