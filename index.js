// Scrivere una funzione JS moveToFront(a, k), dove a è un array che rappresenta una lista di numeri,
// e k un intero. La funzione cerca la prima occorrenza di k nella lista. 
// Se k si trova nella lista, la funzione restituisce la sua posizione nella lista (contando da 0)
// e porta l’elemento che contiene k in testa alla lista, altrimenti restituisce -1.


// Nota: Si assuma che la testa della lista sia l'elemento 0 di a, mentre la coda l'ultimo.

function moveToFront(a, k) {
    let result = -1;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if (element === k) {
            const newHead = a.splice(i, 1);
            a = [...newHead, ...a]; 
            console.log(a)
            result = i;
            break;
        }
    }
    return result;
}

const arr = [3, 5, 1, 3]
const el = moveToFront(arr, 5);

// console.log(el)
// console.log(arr)