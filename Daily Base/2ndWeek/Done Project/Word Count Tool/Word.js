console.log("This Project is Alive.");

let btn = document.querySelector('#Calculate-btn');
btn.addEventListener('click', function(){
    if(document.querySelector('#txt').value.length == 0){
        alert("Please enter a word to find the length");
    }
    else{
        document.querySelector('.output').innerHTML +=
        `<div class='OP'>
            <p>The Length of ${document.querySelector('#txt').value} Is: ${document.querySelector('#txt').value.length}</p>
         </div>
        `;

        document.querySelector('#txt').value = "";
    }
})