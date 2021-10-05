console.log("Running");

let input = document.getElementById('txt').addEventListener('input', Submit);
let delete_btn = document.querySelectorAll('.btn').addEventListener('click', deleteBtn)

function Submit(){
    input = document.getElementById('txt');
    let valuetxt = input.value;
    fetch(`http://api.zippopotam.us/us/${valuetxt}`)
        .then(response => {
            if(response.status != 200 && valuetxt == ''){
                document.getElementById('para').innerHTML +=
                `
                    <p>Please Enter a Valid ZipCode & Please Try again</p>
                `;
                throw Error(response.statusText);
            }
            else{
                return response.json();
            }
        })
        .then(data =>{
            let output = '';
            data.places.forEach(place => {
                output +=
                `
                    <div class="output">
                        <div class="inner">
                            <div class="flex">
                                <h2 class="location">Location Info</h2>
                                <button class="btn"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="sub">
                                <h3>City:  <span class="op">${place['place name']}</span></h3>
                                <h3>State:  <span class="op">${place['state']}</span></h3>
                                <h3>Longitude:  <span class="op">${place['longitude']}</span></h3>
                                <h3>Latitude:  <span class="op">${place['latitude']}</span></h3>
                            </div>
                        </div>
                    </div>
                `
            })

            document.querySelector('.output').innerHTML = output;
        })
        .catch(err => console.log(err))
}
