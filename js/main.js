'use strict'

const kmNumber = prompt('Inserisci i km che devi percorrere per arrivare a destinazone');
const age = prompt('Inserisci la tua eta');

let molt = kmNumber * parseFloat(0.21); 

if (age < 18) {
    console.log ('hai diritto ad uno sconto del 20%');
} else if (age > 65) {
    console.log ('hai diritto ad uno sconto del 40%');
} else {
    console.log ('paga prezzo pieno');
}

console.log(molt);

document.getElementById('ticket').innerHTML = molt.toFixed(2);