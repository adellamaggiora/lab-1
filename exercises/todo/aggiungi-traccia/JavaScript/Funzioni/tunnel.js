function tunnel(convoy, max_height) {
    if (!convoy || convoy.length === 0) {
        return []
    }
    for (let i = 0; i < convoy.length; i++) {
        if (convoy[i].altezza >= max_height) {
            convoy.splice(i, 1) // Rimuove l'elemento che non soddisfa la condizione
            i-- // Decrementa l'indice per non saltare il prossimo elemento
        }
    }
    return convoy
}