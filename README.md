Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

---const kmNumber = prompt ('inserisci i kilometri che devi percorrere per arrivare a destinazione');
---const age = prompt ('inserisci la tua eta');



Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

---let molt = kmNumber * parsefloat(0.21);

if (age < 18) {
    console.log ('hai diritto ad uno sconto del 20%');
} else if (age > 65) {
    console.log ('hai diritto ad uno sconto del 40%');
} else {
    console.log ('paga prezzo pieno');
}



L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.

console.log(molt);

document.getElementById ('ticket') .innerHTML = molt.toFixed(2);