function moveToFront(a, k) {
    let idx = -1;
    // Trova l'indice del primo elemento che soddisfa la condizione specificata dalla funzione f
    for (let i = 0; i < a.length; i++) {
        if (a[i] === k) {
            idx = i
            break
        }
    }
    // Se un elemento è stato trovato, spostalo all'inizio dell'array
    if (idx !== -1) {
        const [item] = a.splice(idx, 1) // Rimuove l'elemento dall'array
        a.unshift(item) // Inserisce l'elemento all'inizio dell'array
    }
    return idx
}