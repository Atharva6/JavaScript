// Variables and Constants
const input = document.getElementById('inp');
const search = document.getElementById('search');
const items = document.querySelectorAll('.item');

// Event Listener
search.addEventListener('click', ()=>{
    let inpValue = input.value;
    let value =  input.value.toUpperCase();
    if(inpValue.length == 0){
        alert("Search item to find it!!!");
    }
    else{
       let items = document.querySelectorAll('.item');

       for(let i=0; i<items.length; i++){
           let abc = items[i].getElementsByClassName('txt')[0];
           if(abc.innerHTML.toUpperCase().indexOf(value) > -1){
               items[i].style.display = "";
           }else{
               items[i].style.display = "none";
            //    input.value = "";
           }
       }
    }
})