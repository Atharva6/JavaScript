console.log("Tip Calculator Bolteee");

let calculate_btn = document.getElementById('calculate_btn');
calculate_btn.addEventListener('click', ()=>{
    let billAmt = document.getElementById('billAmt').value;
    let billPerc = document.getElementById('billPerc').value;

    let tipAmt = document.getElementById('tipAmt');
    let total = document.getElementById('total');

    tipAmt.value = billAmt * (billPerc / 100);
    total.value = billAmt + tipAmt.value;
})