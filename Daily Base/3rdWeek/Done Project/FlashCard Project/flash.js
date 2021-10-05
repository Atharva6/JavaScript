console.log("Wadddisssuppp EveryBody");

let Addbtn = document.getElementById('addBtn');
Addbtn.addEventListener('click', function(){
    document.querySelector('.output').innerHTML +=
    `
        <div class="output">
            <h3>Question<h3>
            <textarea name="" id="place" cols="30" rows="10" placeholder="Type a Question you want..."></textarea>
            <h3 id="Ans">Answer<h3>
            <textarea name="" id="answer" cols="30" rows="10" placeholder="Type a Answer for Above Question here..."></textarea>
            <br>
            <button class="Save" onclick="Saved()">
                Save
            </button>
        </div>
    `;
})

function Saved(){
    document.querySelector('.txt').innerHTML +=
    `
        <div class="txt">
            <div class="shown">
                <h2> ${document.getElementById('place').value}? </h2>
                <button id='Show/hide' class="firstBtn" onclick="Show()">
                    Show/Hide
                </button>
                <p id="p">  ${document.getElementById('answer').value} </p>
                <br>
                <button class="Edit">
                    Edit
                </button>
                <button class="Delete">
                    Delete
                </button>
            </div>
        </div>

    `;
}

function Show(){
    let p = document.getElementById('p');
    if(p.style.display != "none"){
        p.style.display = "none";
    }
    else{
        p.style.display = "block";
    }
}

    