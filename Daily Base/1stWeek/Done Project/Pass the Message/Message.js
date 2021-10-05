console.log("This is the project of Message Passer");

let btn = document.getElementById('mybtn');
btn.addEventListener("click", function(e){
    let input = document.getElementById('search');
    let p = document.getElementById('para');
    let message = localStorage.getItem('message');
    if(message == null){
        messObj = [];
    }
    else{
        messObj = JSON.parse(message);
    }
    messObj.push(input.value);
    localStorage.setItem('message', JSON.stringify(messObj));
    input.value = '';
    console.log(messObj);
    p.innerHTML = "<b>Message Delivered Successfully</b>"
})
