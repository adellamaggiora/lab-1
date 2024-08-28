// Si scriva una funzione normalizza(T) che,
// dato un albero k-ario non vuoto T come definito a lezione
// (oggetti con chiavi val e figli, dove figli è un array di nodi),
// in cui i nodi hanno valori di tipo stringa,
// lo modifica sostituendo ad ogni valore s,
// true se la lunghezza di s è minore o uguale di 3 e false altrimenti.

const T = {
    val: "pippo",
    figli: [
        { val: "qui" },
        { val: "quo", figli: [{ val: "qua" }] },
        { val: "casa" }
    ]
};

// T = {
//   val: false,
//   figli: [
//     { val: true }, 
//     { val: true, figli: [{ val: true }] }, 
//     { val: false }
//   ],
// };

function isLessEq3(s) {
    let result = false;
    if (s.length <= 3) {
        result = true;
    }
    return result;
}

function normalizza(T) {
    if (!T) {
        return;
    }
    // figli foglia
    if (T.val && (!T.figli || !T.figli.length)) {
        T.val = isLessEq3(T.val);
        return;
    }
    T.val = isLessEq3(T.val)
    for (const figlio of T.figli) {
        normalizza(figlio);
    }
}

normalizza(T)
console.log(JSON.stringify(T, null, 3));