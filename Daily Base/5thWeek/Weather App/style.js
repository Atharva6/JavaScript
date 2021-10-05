console.log("Weather App");

// Global 
let lat;
let long;

window.addEventListener('load', ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;

            fetch()
        })
    }
})