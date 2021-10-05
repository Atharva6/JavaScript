console.log("This is Still Working");

const view_btn = document.getElementById("view");
const form = document.querySelector('.form');
const cross_btn = document.getElementById('cross')

view_btn.addEventListener('click', function(){
    form.classList.add('active');
})

cross_btn.addEventListener('click', function(){
    form.classList.remove('active');
})