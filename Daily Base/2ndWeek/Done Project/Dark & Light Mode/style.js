console.log("I am Alive")

let toggle = document.getElementById('toggle').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme')
})