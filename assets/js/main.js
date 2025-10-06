/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


PRO TIP:
prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la consegna e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso di lavoro ed il codice evitandoti di restare li a fissare una pagina vuota.
*/


/* Tools:
- const/let per dichiarare numero km e età passeggero

- Definire il prezzo del biglietto di 0.21€ al km
- chiedere all'utente l'eta 
- chiedere all'utente i km che vuole percorrere
- if/ else usare le istruzioni che in base all'eta da uno sconto al pax 
    - se l'eta del pax è meno di 18 applicare uno sconto del 20%
    - se l'eta del pax è maggiore di 65 anni applicare uno sconto del 40%
- del 20% per minori o del 40% per over seventy 
- Verificare se l'autput da un valore sul prezzo corretto con console.log
- Arrotondare il prezzo
- Autput in forma umana con popup alert

*/
// definiamo il prezzo base per km
const prezzo_PerKm = 0.21;
//Chiediamo l'età al passeggero
const eta = Number(prompt("inserisci la tua età"))
//Chiediamo quanti km vuole percorrere
const km = Number(prompt("inserisci la distanza"))
//Calcoliamo il prezzo totale senza sconto
let prezzoTotale = (km * prezzo_PerKm)

//Applichiamo di diversi sconti in base all'età del passeggero
// Se minore il 20% viene applicato 
if (eta < 18) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 20 / 100)
}
// Se over 65 il 40% viene applicato
if ( eta > 65) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 40 / 100)
}
//Arrotondiamo il prezzo a 2 decimali
prezzoTotale = prezzoTotale.toFixed(2);

//Mostrare il prezzo del biglietto al passeggero in modo umano
alert(`Il prezzo del tuo Biglietto è\n in € = {prezzoTotale}`)

//Verifica in console se il risultato è giusto
console.log(prezzoTotale);