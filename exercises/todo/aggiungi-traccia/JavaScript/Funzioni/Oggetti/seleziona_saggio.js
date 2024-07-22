function seleziona(libri) {
    // Creiamo un nuovo array vuoto dove inseriremo i libri selezionati
    let libriRom = []
    // Iteriamo su ogni libro nell'array di input
    for (let libro of libri) {
        // Verifichiamo se il libro è di tipo "romanzo"
        if (libro.tipo === "saggio") {
            // Creiamo un nuovo oggetto per il libro senza la chiave "tipo"
            let libroSag = {
                titolo: libro.titolo,
                autore: libro.autore,
                anno: libro.anno
            }
            // Aggiungiamo il nuovo oggetto all'array dei libri romanzo
            libriSag.push(libroSag)
        }
    }
    // Ritorniamo l'array contenente i libri di tipo "romanzo" senza la chiave "tipo"
    return libriSag
}