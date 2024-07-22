function sottoinsieme(a, b) {
    var res = true
    for (let e in a)
        if (!(e in b)) res = false
    return res
}

function uguali(a, b) {
    return sottoinsieme(a, b) && sottoinsieme(b, a)
}

function analisi(foo, dominio, codominio) {
    let immagine = {}
    let suriettiva = true
    let iniettiva = true
    // Calcola immagine
    for (let elemento in dominio) {
        // Se l'elemento è già nell'immagine non è iniettiva
        if (foo(elemento) in immagine) {
            iniettiva = false
        } else {
            immagine[foo(elemento)] = 0
        }
    }
    // Controlla suriettività
    suriettiva = uguali(codominio, immagine)
    // Controlla invertibilità
    let invertibile = suriettiva && iniettiva
    return {
        suriettiva: suriettiva,
        iniettiva: iniettiva,
        invertibile: invertibile
    }
}