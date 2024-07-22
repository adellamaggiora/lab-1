function valuta(t) {
    // Funzione ricorsiva per calcolare il peso di un nodo
    function calcolaPeso(nodo) {
        if (nodo.figli === undefined) {
            // Nodo foglia
            return nodo.val
        } else {
            // Nodo interno
            const sommaPesiFigli = nodo.figli.reduce((somma, figlio) => somma + calcolaPeso(figlio), 0)
            return nodo.val(sommaPesiFigli)
        }
    }
    // Calcola il peso della radice
    return calcolaPeso(t)
}