
console.log("This is Notes App by Atharva");

const btn = document.getElementById('btn');
const input = document.querySelector('.txt input');

btn.addEventListener('click', function(){
    if(input.value.length == 0){
        alert("Please Enter a Note to Add it!")
    }
    else{
        document.querySelector('.output').innerHTML +=
        `<div class="output">
            <h3>
                Note:
            </h3>
            <hr class="header">
            <p>
                ${document.querySelector('.txt input').value}
            </p>
            <button class="delete">
                Delete Note
            </button>
        </div>`;

        document.querySelector('.txt input').value = "";
    }
})