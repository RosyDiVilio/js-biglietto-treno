'use strict'

const kmNumber = prompt('Inserisci i km che devi percorrere per arrivare a destinazone');
const age = prompt('Inserisci la tua eta');

let molt = kmNumber * parseFloat(0.21);
let discount20 = (molt * 20) / 100;
let discount40 = (molt * 40) / 100;

if (age < 18) {
    console.log ('il cliente ha diritto ad uno sconto del 20%');
    document.getElementById('ticket').innerHTML = molt - discount20.toFixed(2);
} else if (age > 65) {
    console.log ('il cliente ha diritto ad uno sconto del 40%');
    document.getElementById('ticket').innerHTML = molt - discount40.toFixed(2);
} else {
    console.log ('paga prezzo pieno');
    document.getElementById('ticket').innerHTML = molt.toFixed(2);
}

console.log(molt);