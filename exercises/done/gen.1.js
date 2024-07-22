/*
Si scriva in JavaScript un generatore csgen(A) che, dato un array di interi A, 
restituisca in ordine crescente gli indici di A, ciascuno con molteplicità 
pari al valore della corrispondente cella di A.

Esempio: csgen([3,0,2,1,0,2]) deve restituire, uno dopo l'altro, 0 0 0 2 2 3 5 5.
Osservazione. Un generatore simile potrebbe essere usato per implementare 
il passo finale di un Counting sort.
*/


function* csgen(A) {
    for (let i = 0; i < A.length; i++) {
        let element = A[i]
        while (element > 0) {
            yield i
            element--
        }
    }
}


const x = csgen([3,0,2,1,0,2]) 
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())