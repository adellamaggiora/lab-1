// Si implementi una funzione partition_until(arr, depth),
// con arr un array di numeri interi (non vuoto) e depth un intero 0. 
// La funzione, ricorsivamente, applica il paradigma “divide-et-impera” come segue:

// se depth=0 o l’array arr contiene un solo elemento, restituisce un array contenente arr;
// altrimenti, calcola ricorsivamente le partizioni di profondità depth-1 delle 
// due metà di arr (calcolate rispetto all'elemento centrale, ovvero in indice arr.length/2 
// approssimato all'intero superiore se la lunghezza è dispari).

function partition_until(arr=[], depth=0) {
    if (depth === 0 || arr.length === 1) {
        return [arr]
    }

    const middle = Math.floor(arr.length / 2);

    const firstPart = arr.splice(0, middle);
    const secondPart = arr;

    return [...partition_until(firstPart, depth-1), ...partition_until(secondPart, depth-1)]
}

const res = partition_until([1, 2, 3, 4, -1, -2, -3, 8, 16], 2);
console.log(res);