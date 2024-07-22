function punti_spesa(a) {
    let punti_spesa = 0
    let punti_pane = 0
    for (let prodotto of a) {
        if (prodotto === "pane") {
            punti_spesa++
            punti_pane++
            if (punti_pane % 3 === 0) {
                punti_spesa++;
            }
        } else if (prodotto === "latte" || prodotto === "sapone" || prodotto === "acqua") {
            punti_spesa++
        } else {
            return -1
        }
    }
    return punti_spesa
}