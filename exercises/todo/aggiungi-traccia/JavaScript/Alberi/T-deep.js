function deep(T) {
    let maxliv = 0 // La massima profondità trovata finora
    let maxval = T.val // Il valore del nodo alla massima profondità trovata

    function rec(T, liv) {
        if (T == undefined) return; // Caso base: il nodo è undefined
        if (liv > maxliv) { // Se il livello corrente è maggiore della massima profondità trovata
            [maxval, maxliv] = [T.val, liv] // Aggiorna il valore e la profondità massima
        }
        rec(T.sx, liv + 1) // Esplora il sottoalbero sinistro
        rec(T.dx, liv + 1) // Esplora il sottoalbero destro
    }

    rec(T, 0); // Inizia l'esplorazione a partire dalla radice con livello 0
    return maxval // Restituisce il valore del nodo più profondo
}