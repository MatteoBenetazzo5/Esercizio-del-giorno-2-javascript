/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a = 20
let b = 13

if (a > b) {
  console.log('Il più grande è:', a)
} else if (b > a) {
  console.log('Il più grande è:', b)
} else {
  console.log('Sono uguali!')
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero = 3

if (numero !== 5) {
  console.log('not equal')
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let n = 20
console.log("IL NUMERO SELEZIONATO é:", n)


if (n % 5 === 0) {
  console.log("DI CONSEGUENZA IL NUMERO DA TE SCELTO è DIVISIBILE PER 5")
} else {
  console.log("MI DISPIACE MA DEVI CAMBIARE NUMERO")  
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let x = 8
let y = 16
// controlliamo le diverse possibilità:
// - se x è 8
// - se y è 8
// - se x+y è 8
// - se la differenza: 16 - 8 = 8

/* if (x === 8 || y === 8 || x + y === 8 || (x - y) === 8) */

/* NON SAPREI COSA SCRIVERE DATO CHE NON FUNZIONA
{
  console.log("CONDIZIONE SODDISFATTA")
} else {
  console.log("CONDIZIONE NON SODDISFATTA")
} 
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/






/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = 'ciao'

if (typeof valore === 'number') {
  console.log('È un numero')
} else {
  console.log('NON è un numero')
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let z = 11
if (z % 2 === 0) {
  console.log('Pari')
} else {
  console.log('Dispari')
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName 
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop("css") 
console.log(me.skills)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numbers = [] 
for (let i = 1; i <= 10; i++) {
  numbers.push(i)
}
console.log(numbers)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

