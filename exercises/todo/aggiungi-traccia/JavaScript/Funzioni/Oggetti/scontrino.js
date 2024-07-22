function scontrino(a) {
    let scontrinores = {
        'totale': 0
    }
    for (let prodotto of a) {
        if (!scontrinores[prodotto.barcode]) {
            scontrinores[prodotto.barcode] = {
                'prezzo': prodotto.prezzo,
                'quantità': 0
            }
        }
        scontrinores[prodotto.barcode]['quantità']++
        scontrinores.totale += prodotto.prezzo
    }
    scontrinores['totale'] = scontrinores.totale // Aggiorna il totale dopo aver iterato
    return scontrinores
}