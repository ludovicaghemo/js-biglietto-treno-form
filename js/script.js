
// DATA
const priceKm = 0.21;
const discountUnder = 0.8;
const discountOver = 0.6;
let ticketPrice = document.getElementById('ticket-price');
console.log(ticketPrice);

// Btn
const submitBtn = document.querySelector('#send');
console.log(submitBtn);

submitBtn.addEventListener('click',
function() {
// qui scrivo codice che sarà eseguito quando utente clicca su elemento submitBtn
    let userDistance = document.getElementById('distance').value;
    console.log(userDistance);

    let userAge = document.getElementById('age').value;
    console.log(userAge);
    
    if (userAge >= 65) {
        ticketPrice.innerHTML = (userDistance * priceKm * discountOver);
    } else if (age < 18) {
        ticketPrice.innerHTML = (userDistance * priceKm * discountUnder);
    } else {
        ticketPrice.innerHTML = (userDistance * priceKm);
    }

    const resultElem = document.querySelector('#result');
    
    resultElem.style.display = "block";
});

