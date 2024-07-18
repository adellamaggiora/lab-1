/*
Dato un albero k-ario T, definire una funzione ricorsiva taglia_nodi_interni che,
preso in input un intero positivo m, modifica T in-place, 
rimuovendo tutti i nodi interni (e i rispettivi sottalberi) che hanno meno di m figli.



Notazione

Si codifichi l'albero k-ario T come visto a lezione, 
perciò un albero è rappresentato da un oggetto così formato {val: , figli:[...]}

Si noti inoltre che l'albero vuoto è codificato con il valore null.



Esempio
*/


var T3 = {
    val: 0, figli: [
        {
            val: 1, figli: [
                { val: 3, figli: [] },
                { val: 4, figli: [] },
            ]
        },
        {
            val: 2, figli: [
                { val: 5, figli: [] }
            ]
        },
    ]
}

/*
Taglia tutti i nodi interni di T3 che hanno meno di 2 figli
taglia_nodi_interni(T3, 2);

Perciò T3 dopo la chiamata di taglia_nodi_interni sarà così formato:



    {
    val: 0, figli: [
        {
            val: 1, figli: [
                { val: 3, figli: [] },
                { val: 4, figli: [] },
            ]
        }]
};

il nodo interno 2 è stato rimosso, così come il suo sottalbero
*/

function taglia_nodi_interni(t, m) {
    if (!t) {
        return null;
    }

    if (t.figli.length < m) {
        return null;
    }

    for (let i = 0; i < t.figli.length; i++) {
        let figlio = t.figli[i];
        figlio = taglia_nodi_interni(figlio, m)
    }

    return t
}

// taglia_nodi_interni(T3, 2)
// console.log(JSON.stringify(T3))

