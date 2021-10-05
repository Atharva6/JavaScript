console.log("This is the JavaScript Project.");

const form = document.getElementById('form').addEventListener('submit', save);
function save(e){
    let txt = document.getElementById('txt');
    let Author = document.getElementById('Author');
    let number = document.getElementById('no')
    if(txt.value.length == 0|| Author.value.length == 0){
        alert("Please fill the respective detail to add Book");
    }
    else{
        document.querySelector('.output').innerHTML += 
        `
            <div class="OP">
                <div class="content">
                    <h3>Title</h3>
                    <h3>Author</h3>
                    <h3>ISBN</h3>
                </div>
                <div class='cont'>
                    <p>${document.getElementById('txt').value}</p>
                    <p class="head">${document.getElementById('Author').value}</p>
                    <p class='h'>${document.getElementById('no').value}</p>
                    <button class="deleteBtn"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
        `;
        e.preventDefault();

        let delete_btn = document.querySelectorAll('.deleteBtn');
            for(let i=0; i<delete_btn.length; i++){
                delete_btn[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
    }
}