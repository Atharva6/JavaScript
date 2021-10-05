console.log("Rock Paper Scissor");

const start = document.getElementById('start');
start.addEventListener('click', ()=>{
    let main = document.querySelector('.main')
    let hover = document.querySelector('.hover');
    hover.classList.add('active');
    main.classList.add('hide');
})

const playMatch= () =>{
    // let playerhand = document.querySelector('.PlayerHand');
    // let computerhand = document.querySelector('.ComputerHand');
    let p = document.getElementById('p');
    let c = document.getElementById('c');
    let options = document.querySelectorAll('.options button');
    const computerOption = ['rock','paper','scissor'];

    options.forEach(option=>{
        option.addEventListener('click', function(){
            // Get Random Value of Computer
            let value = Math.floor(Math.random()*3);
            const computerChoice = computerOption[value];

            // Calling compare function
            compareHand(this.textContent, computerChoice);

            // Updating Images
            p.src = `Img/${this.textContent}.png`
            c.src = `Img/${computerChoice}.png`
        })
    })
}



const compareHand = (playerChoice, computerChoice) =>{
     // Comparing Hands
     let mess = document.querySelector('.hover h2');

     // For Tie
     if(playerChoice === computerChoice){
         mess.textContent = "It is a tie!";
         return;
     }

     // For Rock
     if(playerChoice === "rock"){
         if(computerChoice === 'paper'){
            mess.textContent = "Computer Wins";
            return;
         }
         else{
            mess.textContent = "Player Wins";
            return;
         }
     }

     // For Paper
     if(playerChoice === "paper"){
         if(computerChoice === "scissor"){
            mess.textContent = "Computer Wins";
            return;
         }
         else{
            mess.textContent = "Player Wins";
            return;
         }
     }

     // For Scissor
     if(playerChoice === "scissor"){
         if(computerChoice === "rock"){
             mess.textContent = "Computer Wins";
             return;
         }
         else{
             mess.textContent = "Player wins";
             return;
         }
     }
} 

playMatch();
