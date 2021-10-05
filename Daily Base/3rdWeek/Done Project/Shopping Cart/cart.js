console.log("This is the Shopping Cart Project");

function icreaseBtn1(){
    let first_inp = document.getElementById('first_input');
    let item_price = document.querySelector('p span');
    let total = document.querySelector('span.amt');
    let lastAmount = document.querySelector('span.last');
    let shipping_Charge = document.querySelector('span.Shipping')
    if(first_inp.value >= 5){
        first_inp.value = 5;
        alert("Max 5 quantity is allowed");
        item_price.innerHTML = parseInt(item_price.innerHTML) = 225;
    }
    else{
        first_inp.value = parseInt(first_inp.value) + 1;
    }
    item_price.innerHTML = parseInt(item_price.innerHTML) + 45;
    total.innerHTML = parseInt(total.innerHTML) + 45;
    lastAmount.innerHTML = parseInt(total.innerHTML)+parseInt(shipping_Charge.innerHTML);


}

function decreaseBtn1(){
    first_inp = document.getElementById('first_input');
    item_price = document.querySelector('p span');
    total = document.querySelector('span.amt');
    lastAmount = document.querySelector('span.last');
    shipping_Charge = document.querySelector('span.Shipping')
    if(first_inp.value <= 0){
        first_inp.value = 0;
        alert("Negative Numbers are not Allowed!");
        item_price.innerHTML = parseInt(item_price.innerHTML) = 0;
    }
    else{
        first_inp.value = parseInt(first_inp.value) - 1;
    }
    item_price.innerHTML = parseInt(item_price.innerHTML) - 45;
    total.innerHTML = parseInt(total.innerHTML) - 45;
    lastAmount.innerHTML = parseInt(total.innerHTML)+parseInt(shipping_Charge.innerHTML);
}

function increaseBtn2(){
    let second_inp = document.getElementById('Second_input');
    let item_price1 = document.querySelector('p span.n');
    let total2 = document.querySelector('span.amt');
    let lastAmount1 = document.querySelector('span.last');
    let shipping_Charge1 = document.querySelector('span.Shipping')
    if(second_inp.value >= 5){
        second_inp.value = 5;
        alert("Max 5 quantity is allowed");
        item_price1.innerHTML = parseInt(item_price1.innerHTML) = 150;
    }
    else{
        second_inp.value = parseInt(second_inp.value) + 1;
    }
    item_price1.innerHTML = parseInt(item_price1.innerHTML) + 30;
    total2.innerHTML = parseInt(total2.innerHTML) + 30;
    lastAmount.innerHTML = parseInt(total.innerHTML)+parseInt(shipping_Charge.innerHTML);
}

function decreaseBtn2(){
    second_inp = document.getElementById('Second_input');
    item_price1 = document.querySelector('p span.n');
    total2 = document.querySelector('span.amt');
    lastAmount1 = document.querySelector('span.last');
    shipping_Charge1 = document.querySelector('span.Shipping')
    if(second_inp.value <= 0){
        second_inp.value = 0;
        alert("Negative Numbers are not Allowed!");
        item_price1.innerHTML = parseInt(item_price1.innerHTML) = 0;
    }
    else{
        second_inp.value = parseInt(second_inp.value) - 1;
    }
    item_price1.innerHTML = parseInt(item_price1.innerHTML) - 30;
    total2.innerHTML = parseInt(total2.innerHTML) - 30;
    lastAmount.innerHTML = parseInt(total.innerHTML)+parseInt(shipping_Charge.innerHTML);
}