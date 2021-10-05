console.log("This is OP");

let numberInput = document.getElementById('no');
numberInput.addEventListener('input', ()=>{
    let no = numberInput.value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/'+no, true);

    xhr.onload = function(){
        if(this.status == 200 && no != ''){
            let p = document.getElementById('para');
            let output = document.querySelector('.output'); 
            output.style.display = 'block';
            p.innerText = this.responseText;
        }
    }
    xhr.send();
})