console.log("This is the To do list App made by Atharva");

let btn = document.getElementById('btn').addEventListener('click', ()=>{
    if(document.querySelector('.content input').value.length == 0){
        alert("Please Enter a task");
    }
    else{
        document.getElementById('task').innerHTML += 
                `<div class="tasks">
                    <span id="newTask">
                        ${document.querySelector('.content input').value}
                    </span>
                    <button class='delete'>
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>`;

        let current_task = document.querySelectorAll(".delete");
        for(let i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let task = document.querySelectorAll('.tasks');
        for(let i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }



        document.querySelector('.content input').value = "";
    }
})